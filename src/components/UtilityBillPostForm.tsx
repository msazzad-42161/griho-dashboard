import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { Icon } from '@iconify/react';

import { cn } from "@/lib/utils"
import { Button } from '@/stories/common/Input/Button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useTranslation } from "react-i18next";

const formSchema = z.object({
  month: z.string({
    required_error: "মাস নির্বাচন করুন",
  }),
  year: z.string({
    required_error: "বছর নির্বাচন করুন",
  }),
  date: z.date({
    required_error: "তারিখ নির্বাচন করুন",
  }),
  location: z.string({
    required_error: "লোকেশন নির্বাচন করুন",
  }),
  building: z.string({
    required_error: "বিল্ডিং নির্বাচন করুন",
  }),
})
type Props = {
    onSearch: (values: z.infer<typeof formSchema>) => void;
    onReport: () => void;
    onSave: () => void;
    title: string;

}
export default function UtilityBillPostForm({ onSearch, onReport, onSave, title }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  const { t } = useTranslation();

  return (
    <div className="flex flex-col lg:gap-6 gap-4 lg:p-6 p-4 bg-white rounded-lg shadow-sm">
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <h2 className="lg:text-3xl text-xl font-semibold text-primary lg:flex-1 self-start">{title}</h2>
        <div className="flex gap-2 lg:self-end lg:flex-none flex-1">
          <Button label={t('report')} iconClassName="text-primary" className="text-sm lg:text-[16px] h-11 flex-1 border border-nav-text bg-transparent text-default-text" icon="f7:doc-plaintext" primary={false} onClick={onReport}/>
          <Button label={t('save')} className="text-sm lg:text-[16px] h-11 flex-1" icon="material-symbols:save-outline" primary={true} onClick={onSave} />
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end">
            <FormField
              control={form.control}
              name="month"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm lg:text-[22px] text-red-500">*</FormLabel>
                  <FormLabel className="text-sm lg:text-[22px]">{t('utility_bill.reading_month')}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-14 lg:h-16 text-sm lg:text-lg">
                        <SelectValue placeholder={t('utility_bill.select_month')} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      {["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"]
                        .map((month) => (
                          <SelectItem key={month} className="text-sm lg:text-lg" value={month.toLowerCase()}>
                            {month}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm lg:text-[22px] text-red-500">*</FormLabel>
                  <FormLabel className="text-sm lg:text-[22px]">{t('utility_bill.reading_year')}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-14 lg:h-16 text-sm lg:text-lg">
                        <SelectValue placeholder={t('utility_bill.select_year')} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      {[2024, 2023, 2022, 2021].map((year) => (
                        <SelectItem key={year} className="text-sm lg:text-lg" value={year.toString()}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm lg:text-[22px] text-red-500">*</FormLabel>
                  <FormLabel className="text-sm lg:text-[22px]">{t('utility_bill.reading_date')}</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <button
                          className="flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 h-14 lg:h-16 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
                        >
                          <span className="flex-1 text-left text-sm lg:text-lg">{field.value ? format(field.value, "dd-MMM-yy") : t('utility_bill.choose_a_date')}</span>
                          <Icon icon="mdi:calendar-today" className="lg:text-lg text-sm"/>
                        </button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent align="start" className="w-auto p-0 bg-white">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm lg:text-[22px] text-red-500">*</FormLabel>
                  <FormLabel className="text-sm lg:text-[22px]">{t('utility_bill.project_location')}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-14 lg:h-16 text-sm lg:text-lg">
                        <SelectValue placeholder={t('utility_bill.select_location')} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectItem className="text-sm lg:text-lg" value="mirpur">Mirpur</SelectItem>
                      <SelectItem className="text-sm lg:text-lg" value="dhanmondi">Dhanmondi</SelectItem>
                      <SelectItem className="text-sm lg:text-lg" value="gulshan">Gulshan</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="building"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm lg:text-[22px] text-red-500">*</FormLabel>
                  <FormLabel className="text-sm lg:text-[22px]">{t('utility_bill.building_resident')}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-14 lg:h-16 text-sm lg:text-lg">
                        <SelectValue placeholder={t('utility_bill.select_building')} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectItem className="text-sm lg:text-lg" value="a1">A1-Mirpur-Test Test</SelectItem>
                      <SelectItem className="text-sm lg:text-lg" value="b1">B1-Mirpur-Test Test</SelectItem>
                      <SelectItem className="text-sm lg:text-lg" value="c1">C1-Mirpur-Test Test</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              label={t('search_now')}
              icon="iconamoon:search-light"
              primary={true}
              className="h-14 lg:h-16 w-full lg:text-[20px] text-[16px]"
              iconClassName="text-white lg:text-[20px] text-[16px]"
              onClick={() => onSearch(form.getValues())}
            />
          </div>
        </form>
      </Form>
    </div>
  )
}

