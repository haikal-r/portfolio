"use server";
import { WAKATIME } from "@/constants/wakatime"; 

export const wakatimeWeeklyCodingActivity = async() => {
  const res = await fetch(WAKATIME.codingActivity, {
    cache: "no-store",
  })
  return res.json()
}
export const wakatimeWeeklyCodingLanguages = async() => {
  const res = await fetch(WAKATIME.codingLanguages, {
    cache: "no-store",
  })
  return res.json()
}
export const wakatimeWeeklyCodeEditor = async() => {
  const res = await fetch(WAKATIME.codeEditor, {
    cache: "no-store",
  })
  return res.json()
}
export const wakatimeWeeklyOperatingSystem = async() => {
  const res = await fetch(WAKATIME.operatingSystem, {
    cache: "no-store",
  })
  return res.json()
}