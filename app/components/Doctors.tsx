import { title } from "process";
import Doctor from "./Doctor";

const doctors = [
  {
    id: 1,
    name: "Prof. Dr. Mohamed Amin Abdikarim Nur",
    title: "Phd General Surgeon",
    image: "/dr2.jpg",
    exp: "15 years",
  },
  {
    id: 2,
    name: "Dr. Hussein Abshir Hassan",
    title: "Gastroenterologist and Oncologist",
    image: "/dr1.jpg",
    exp: "5 years",
  },
  {
    id: 3,
    name: "Dr. Hani Omar Wehliye",
    title: "Obstetrician and Gynecologist",
    image: "/dr.jpg",
    exp: "10 years",
  },
  {
    id: 4,
    name: "Dr. Mahdi Mohamud",
    title: "Cardiologist",
    image: "/dr.jpg",
    exp: "8 years",
  },
  {
    id: 5,
    name: "Dr. Muna Ahmed Aden",
    title: "Pediatrician",
    image: "/dr.jpg",

    exp: "8 years",
  },
];

const Doctors = () => {
  return (
    <div className="bg-[#e1ebf7]">
      <div className="container mx-auto  py-15 flex flex-col gap-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-center ">Our Doctors</h2>
          <p className="text-muted-foreground text-center">
            Our doctors are highly qualified and experienced professionals who
            are dedicated to providing the best care for our patients.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {doctors.map((doctor) => (
              <Doctor key={doctor.id} {...doctor} />
            ))}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
