import { NextResponse } from "next/server";
import OpenAI from "openai";
import { ResumeFormValues, ResumeAISections } from "@/lib/types";
import { buildResumePrompt } from "@/lib/generatePrompt";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ResumeFormValues;

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: "Missing OPENAI_API_KEY" }, { status: 500 });
    }

    const prompt = buildResumePrompt(body);

    const completion = await client.chat.completions.create({
      model: "gpt-5-mini",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ]
    });

    const text = completion.choices[0]?.message?.content ?? "";

    let parsed: ResumeAISections | null = null;
    try {
      parsed = JSON.parse(text) as ResumeAISections;
    } catch {
      const jsonStart = text.indexOf("{");
      const jsonEnd = text.lastIndexOf("}");
      if (jsonStart !== -1 && jsonEnd !== -1) {
        parsed = JSON.parse(text.slice(jsonStart, jsonEnd + 1)) as ResumeAISections;
      }
    }

    if (!parsed) {
      return NextResponse.json(
        { error: "Failed to parse AI response", raw: text },
        { status: 500 }
      );
    }

    return NextResponse.json(parsed);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}


