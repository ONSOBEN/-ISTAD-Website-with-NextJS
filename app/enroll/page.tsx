import { FooterDivider, TextInput, Label, Select, Datepicker } from "flowbite-react";

export default function Enroll() {
    return (
        <div className="container mx-auto bg-white rounded-lg p-8 my-8">
            <h1 className="uppercase text-center font-extrabold text-3xl pb-4">Enroll Form</h1>
            {/* Form Input */}
            <div className="grid grid-cols-2 gap-12 w-full px-14">
                {/* Col1 */}
                <div>
                    <form className="grid grid-cols-1 gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="fullname1" value="Full name (en)" className="uppercase font-bold tracking-[.25em]" />
                                <span className="text-red-500">*</span>
                            </div>
                            <TextInput id="fullname1" type="email" placeholder="Ruos Sovanra" required />
                        </div>
                        <div>
                            <div className="mb-2 block ">
                                <Label htmlFor="gender" value="Gender" className="font-bold uppercase tracking-[.25em]" />
                                <span className="text-red-500">*</span>
                            </div>
                            <Select id="gender" required>
                                <option disabled selected>Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </Select>
                        </div>
                        <div>
                            <div className="mb-2 block ">
                                <Label htmlFor="dob" value="Date of Birth" className="font-bold uppercase tracking-[.25em]" />
                                <span className="text-red-500">*</span>
                            </div>
                            <Datepicker weekStart={1} /> {/* Monday */}
                        </div>
                        <div>
                            <div className="mb-2 block ">
                                <Label htmlFor="pob" value="Place of Birth" className="font-bold uppercase tracking-[.25em]" />
                                <span className="text-red-500">*</span>
                            </div>
                            <Select id="pob" required>
                                <option value="0" disabled selected>Select Province</option>
                                <option value="1">Banteay Meanchey</option>
                                <option value="2">Battambang</option>
                                <option value="3">Kampong Cham</option>
                                <option value="4">Kampong Chhnang</option>
                                <option value="5">Kampong Speu</option>
                                <option value="6">Kampong Thom</option>
                                <option value="7">Kampot</option>
                            </Select>
                        </div>
                        <div>
                            <div className="mb-2 block ">
                                <Label htmlFor="currentAddress" value="Current Address" className="font-bold uppercase tracking-[.25em]" />
                                <span className="text-red-500">*</span>
                            </div>
                            <Select id="currentAddress" required>
                                <option value="0" disabled selected>Select Current Address</option>
                                <option value="1">Chamkar Mon</option>
                                <option value="2">Doun Penh</option>
                                <option value="3">Prampir Meakkakra</option>
                                <option value="4">Tuol Kouk</option>
                                <option value="5">Dangkao</option>
                            </Select>
                        </div>
                    </form>
                </div>
                {/* Col2 */}
                <div>
                    <form className="grid grid-cols-1 gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Email" className="uppercase font-bold tracking-[.25em]" />
                                <span className="text-red-500">*</span>
                            </div>
                            <TextInput id="email" type="email" placeholder="info@gmail.com" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="phoneNumber" value="Phone Number" className="uppercase font-bold tracking-[.25em]" />
                                <span className="text-red-500">*</span>
                            </div>
                            <TextInput id="phoneNumber" placeholder="95990910 (Telegram)" addon="+855" required />
                        </div>
                        <div>
                            <div className="mb-2 block ">
                                <Label htmlFor="education" value="Education" className="font-bold uppercase tracking-[.25em]" />
                                <span className="text-red-500">*</span>
                            </div>
                            <Select id="education" required>
                                <option value="0" disabled selected>Select Education</option>
                                <option value="1">First Year</option>
                                <option value="2">Second Year</option>
                                <option value="3">Third Year</option>
                                <option value="4">Fourth Year</option>
                                <option value="5">Graduated</option>
                            </Select>
                        </div>
                        <div>
                            <div className="mb-2 block ">
                                <Label htmlFor="university" value="University" className="font-bold uppercase tracking-[.25em]" />
                                <span className="text-red-500">*</span>
                            </div>
                            <Select id="university" required>
                                <option value="0" disabled selected>Select University</option>
                                <option value="1">ACLEDA Institute of Business</option>
                                <option value="2">American University of Phnom Penh</option>
                                <option value="3">Asia Euro University</option>
                                <option value="4">Beltei International University</option>
                                <option value="5">Build Bright University</option>
                                <option value="42">Cambodia Academy of Digital Technology</option>
                                <option value="7">Cambodian Mekong University</option>
                                <option value="6">Cambodia University for Specialties</option>
                                <option value="8">CamEd Business School</option>
                                <option value="9">Chenla University</option>
                                <option value="10">East Asia Management University</option>
                                <option value="11">Economics and Finance Institute</option>
                                <option value="12">Human Resources University</option>
                                <option value="13">IIC University of Technology</option>
                                <option value="14">Institute of Technology of Cambodia</option>
                                <option value="15">Western University Cambodia</option>
                            </Select>
                        </div>
                    </form>
                </div>
            </div>
            {/* Line */}
            <div className="w-[90%] mx-auto">
                <FooterDivider />
            </div>
            {/* Course */}
            <div className="px-14">
                <div className="max-w-md">
                    <div className="mb-2 block ">
                        <Label htmlFor="course" value="Course" className="font-bold uppercase tracking-[.25em]" />
                        <span className="text-red-500">*</span>
                    </div>
                    <Select id="course" required>
                        <option value="0" disabled selected>Select Course</option>
                        <option value="1">Flutter Mobile Development</option>
                        <option value="2">iOS Development</option>
                        <option value="3">SQL & Data Modeling with PostgreSQL</option>
                        <option value="4">Web Design</option>
                        <option value="5">DevOps Engineering</option>
                        <option value="6">C++ Programming</option>
                        <option value="7">Docker</option>
                        <option value="8">Data Analytics</option>
                        <option value="9">Android Development</option>
                        <option value="10">NEXT.js</option>
                        <option value="11">Linux Administrator</option>
                        <option value="12">Spring Framework</option>
                        <option value="13">Blockchain Development</option>
                        <option value="14">Java Programming</option>
                    </Select>
                </div>
                <div className="py-2 text-red-500 font-bold">
                    <h3>👉 Please filter available courses to select the class..!</h3>
                </div>
            </div>
            {/* Button */}
            <div className="flex justify-end gap-4">
                <button
                    className="w-40 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded uppercase"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="w-40 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded uppercase"
                >
                    Enroll Now
                </button>
            </div>
        </div>
    );
}