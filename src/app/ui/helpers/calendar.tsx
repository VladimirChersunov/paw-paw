interface CalendarProps {
  month: string;
  year: string;
  selectedDate: number | null;
  onDateClick: (date: number) => void;
}

const Calendar: React.FC<CalendarProps> = ({ month, year, selectedDate, onDateClick }) => {
  // Функция для получения количества дней в месяце
  const daysInMonth = (month: number, year: number): number => {
    return new Date(year, month, 0).getDate();
  };

  // Генерация календаря для выбранного месяца и года
  const generateCalendar = (): (number | null)[] => {
    const totalDays: number = daysInMonth(parseInt(month), parseInt(year));
    const firstDayOfMonth: number = new Date(`${year}-${month}-01`).getDay();
    const calendarDays: (number | null)[] = [];

    for (let i = 1; i <= totalDays; i++) {
      calendarDays.push(i);
    }

    // Добавляем пустые ячейки для выравнивания дней недели
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.unshift(null);
    }

    return calendarDays;
  };

  // Обработка клика по дню в календаре
  const handleDateClick = (date: number) => {
    onDateClick(date);
  };

  // Список дней недели
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <div className="py-2 px-4 flex justify-between rounded-[12px] border-[2px] border-[#00d8d8] gap-3">
        {weekDays.map((day, index) => (
          <div key={day} className={`${(index == 5 || index == 6) ? 'text-skin-error' : 'text-skin-base'}`}>
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {generateCalendar().map((date, index) => (
          <div
            key={index}
            className={`p-2 text-center cursor-pointer ${date === selectedDate ? 'bg-[#00d8d8] rounded-[12px] text-white' : 'hover:bg-blue-100'
              }`}
            onClick={() => handleDateClick(date as number)}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;