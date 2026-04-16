import { db, auth } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function logActivity(action: string, details: string) {
  const user = auth.currentUser;
  if (!user) return;

  try {
    await addDoc(collection(db, "audit_vault"), {
      uid: user.uid,
      email: user.email,
      action,
      details,
      timestamp: serverTimestamp(),
      ip: "client-side-logged", // In a real app, this would be server-side
    });
  } catch (error) {
    console.error("Failed to log activity:", error);
  }
}
