import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("font") as File;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filePath = path.join(process.cwd(), "public", "fonts", file.name);

  // Ensure 'public/fonts' directory exists
  fs.mkdirSync(path.dirname(filePath), { recursive: true });

  // Write the uploaded file to the public/fonts directory
  fs.writeFileSync(filePath, buffer);

  return NextResponse.json({
    message: "File uploaded successfully",
    filePath: `/fonts/${file.name}`,
  });
}
