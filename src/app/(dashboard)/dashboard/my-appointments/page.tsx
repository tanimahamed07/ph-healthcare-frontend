import AppointmentList from "@/components/models/my-appointments/appointment-list";

export default function page() {
  return (
    <div className="m-10">
      <h1 className="text-2xl font-bold mb-4">My Appointments</h1>
      <AppointmentList />
    </div>
  );
}
