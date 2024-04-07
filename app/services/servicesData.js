


// servicesData.js
import Image from 'next/image';
import GoalSettingImage from '../assets/goal.jpg';
import BodyMindImage from '../assets/be_calm_nobody_can_trigger.jpg';
import SpiritualImage from '../assets/spiritual-2.jpg';

export const data = [
    {
        id: 1,
        icon: <Image src={GoalSettingImage} alt="BodyMind" loading="lazy" width={400} height={400} />,
        title: "Life",
        description: "Find purpose, Set and achieve goals, Overcome procrastination, Banish Self Doubt, Start each day fresh, Stay accountable, Maintain focus, Foster creativity, Stay motivated"
    },
    {
        id: 2,
        icon: <Image src={BodyMindImage} alt="Embodied Coaching" loading="lazy" width={400} height={400} />,
        title: "Embodied",
        description: "Alleviate Stress and Anxiety, Achieve Balance, Cultivate Serenity, Deepen Body-Mind Connection, Live in the Present Moment, Breathwork, Rebalancing Nervous System, Develop Self-Care Rituals, Somatic experiencing techniques, Access deep relaxation "
    },
    {
        id: 3,
        icon: <Image src={SpiritualImage} alt="BodyMind" loading="lazy" width={400} height={400} />,
        title: "Spiritual",
        description: "Deepen connection with higher self, Clarify personal beliefs, Cultivate forgiveness, Set meaningful spiritual goals, Foster compassion, Embrace gratitude practices, Seek wisdom, Prayer and Meditation Integration, Connect with a sense of divine peace, Acceptance, Focus on your self"
    }
];



