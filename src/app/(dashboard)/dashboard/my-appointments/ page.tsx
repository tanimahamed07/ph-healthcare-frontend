import AppointmentList from "@/components/models/my-appointments/appointment-list";

export default function page() {
  return (
    <div className="m-10">
      <h1> My Appointments </h1>
      <AppointmentList />
    </div>
  );
}
