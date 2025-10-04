import { connectDB } from "@/database/mongoose";

async function main() {
  try {
    await connectDB();
    console.log("Datbase connection succeeded");
    process.exit(0);
  } catch (error) {
    console.log("Datbase connection failed",error);
    process.exit(1);
  }
}

main();