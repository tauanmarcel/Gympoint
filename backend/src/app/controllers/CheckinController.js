import { startOfDay, endOfDay, startOfWeek } from 'date-fns';
import { Op } from 'sequelize';
import Checkin from '../models/Checkin';
import Student from '../models/Student';
import Registration from '../models/Registration';

class Checkins {
    async index(req, res) {
        const { page = 1 } = req.query;
        const limit = 10;

        const checkin = await Checkin.findAll({
            where: {
                student_id: req.params.student_id
            },
            order: [['id', 'DESC']],
            limit,
            offset: (page - 1) * limit
        });

        return res.status(200).json(checkin);
    }

    async store(req, res) {
        const { student_id } = req.params;

        const student = await Student.findByPk(student_id);

        if (!student) {
            return res.status(400).json({ error: 'Student not found!' });
        }

        const registration = await Registration.findOne({
            where: {
                student_id
            }
        });

        if(!registration || !registration.active){
            return res.status(400).json({error: 'Student don\'t have a active registration.'});
        }

        const today = new Date();

        const startWeek = startOfWeek(today, { weekStartsOn: 1 });

        const chekins = await Checkin.findAll({
            where: {
                student_id: student.id,
                created_at: {
                    [Op.between]: [startOfDay(startWeek), endOfDay(today)]
                }
            }
        });

        if (chekins && chekins.length >= 5) {
            return res
                .status(401)
                .json({ error: 'Student has already 5 check-ins this week!' });
        }

        const checkin = await Checkin.create({
            student_id: student.id,
            created_at: new Date()
        });

        return res.status(200).json(checkin);
    }
}

export default new Checkins();
