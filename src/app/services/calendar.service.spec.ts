import { CalendarService } from './calendar.service';
import { weddingEvents } from '../data/wedding-events';

describe('CalendarService', () => {
  it('should create an ICS entry for the Matripujan ceremony with the correct local start time', () => {
    const service = new CalendarService();
    const ics = service.buildIcsContent(weddingEvents[0]);

    expect(ics).toContain('SUMMARY:Matripujan');
    expect(ics).toContain('DTSTART;TZID=Asia/Kolkata:20261127T140000');
    expect(ics).toContain('DTEND;TZID=Asia/Kolkata:20261127T170000');
    expect(ics).toContain('LOCATION:Residence');
  });
});