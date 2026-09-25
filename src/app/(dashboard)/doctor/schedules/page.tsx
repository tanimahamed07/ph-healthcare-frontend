import ScheduleList from "@/components/models/doctor-schedule/schedule-list";


export default function page() {
  return (
    <section className="p-5">
      <div>
        <h1 className="text-2xl">My schedules</h1>
        <p>Create schedules, publish them for booking, or delete drafts.</p>
      </div>
      <ScheduleList />
    </section>
  );
}
