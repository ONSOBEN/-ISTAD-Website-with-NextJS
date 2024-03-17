import CourseCardComponent from "@/app/components/CourseCardComponent";

export type Courses = {
    readonly id : number;
    title :string;
    image: string;
    description : string
}
const CoursePage = () =>{
    const courses: Courses[] = [
        {
            "id": 1,
            "title": "Flutter Mobile Development",
            "image": "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional."
        },
        {
            "id": 2,
            "title": "iOS Development",
            "image": "https://api.istad.co/media/image/4709913c-3dd4-4896-8b05-ba6f7fd074ba.png",
            "description": "iOS Development is designed for students to get started with design iOS App Concepts. This course will focus on languages syntax since basic levels and start to implement real user interfaces following with great user experiences and integrate others iOS features.",
        },
        {
            "id": 3,
            "title": "Senior Java Developer in Sky Booking Co., Ltd",
            "image": "https://api.istad.co/media/image/ebb72f6e-6c2f-4e04-bc75-37253c41555e.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        },
        {
            "id": 4,
            "title": "ឱកាសការងារដែលសិស្សនិស្សិតនឹងទទួលបានក្រោយបញ្ចប់ការសិក្សានៅ ISTAD",
            "image": "https://api.istad.co/media/image/5672e61a-d0bb-4040-a0d6-0c934cbba92e.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        },
        {
            "id": 3,
            "title": "Senior Java Developer in Sky Booking Co., Ltd",
            "image": "https://api.istad.co/media/image/ca4fca81-5460-40c8-9d6b-e9270cd2ecae.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        },
        {
            "id": 4,
            "title": "ឱកាសការងារដែលសិស្សនិស្សិតនឹងទទួលបានក្រោយបញ្ចប់ការសិក្សានៅ ISTAD",
            "image": "https://api.istad.co/media/image/ca4fca81-5460-40c8-9d6b-e9270cd2ecae.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        },
        {
            "id": 3,
            "title": "Senior Java Developer in Sky Booking Co., Ltd",
            "image": "https://api.istad.co/media/image/ebb72f6e-6c2f-4e04-bc75-37253c41555e.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        },
        {
            "id": 4,
            "title": "ឱកាសការងារដែលសិស្សនិស្សិតនឹងទទួលបានក្រោយបញ្ចប់ការសិក្សានៅ ISTAD",
            "image": "https://api.istad.co/media/image/5672e61a-d0bb-4040-a0d6-0c934cbba92e.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        },
        {
            "id": 3,
            "title": "Senior Java Developer in Sky Booking Co., Ltd",
            "image": "https://api.istad.co/media/image/ca4fca81-5460-40c8-9d6b-e9270cd2ecae.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        },
        {
            "id": 4,
            "title": "ឱកាសការងារដែលសិស្សនិស្សិតនឹងទទួលបានក្រោយបញ្ចប់ការសិក្សានៅ ISTAD",
            "image": "https://api.istad.co/media/image/ca4fca81-5460-40c8-9d6b-e9270cd2ecae.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        },
        {
            "id": 3,
            "title": "Senior Java Developer in Sky Booking Co., Ltd",
            "image": "https://api.istad.co/media/image/ebb72f6e-6c2f-4e04-bc75-37253c41555e.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        },
        {
            "id": 4,
            "title": "ឱកាសការងារដែលសិស្សនិស្សិតនឹងទទួលបានក្រោយបញ្ចប់ការសិក្សានៅ ISTAD",
            "image": "https://api.istad.co/media/image/ca4fca81-5460-40c8-9d6b-e9270cd2ecae.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        },
        {
            "id": 3,
            "title": "Senior Java Developer in Sky Booking Co., Ltd",
            "image": "https://api.istad.co/media/image/ebb72f6e-6c2f-4e04-bc75-37253c41555e.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        },
        {
            "id": 4,
            "title": "ឱកាសការងារដែលសិស្សនិស្សិតនឹងទទួលបានក្រោយបញ្ចប់ការសិក្សានៅ ISTAD",
            "image": "https://api.istad.co/media/image/ca4fca81-5460-40c8-9d6b-e9270cd2ecae.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        }]
    return(
        <div className={"flex min-h-screen flex-col items-center justify-between p-24"}>
            <CourseCardComponent courses={courses} />
        </div>
    )
}
export default CoursePage;