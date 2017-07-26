import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/ja";

export type DateString = string & { __date: never };

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);
dayjs.locale("ja");

export function assertIsValidDateConfig(
  date: unknown
): asserts date is dayjs.ConfigType {
  if (!dayjs(date as dayjs.ConfigType).isValid()) {
    throw new Error(
      `Expected 'date' to be dayjs.ConfigType, but received ${date}`
    );
  }
}

export function toDateString(d: dayjs.ConfigType): DateString {
  return dayjs(d).tz("Asia/Tokyo").toISOString() as DateString;
}

export function toDateKey(str: DateString): string {
  return dayjs(str).format("YYYY-MM");
}

export function toFormattedDate(str: DateString): string {
  return dayjs(str).format("LL");
}

export function toFormattedArchiveDate(str: string): string {
  return dayjs(str).format("YYYY/MM");
}
