import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD4An6C8ZEdiJsohwo76QuRxv1hhjNmRlI",
  authDomain: "mcspaceomega.firebaseapp.com",
  projectId: "mcspaceomega",
  storageBucket: "mcspaceomega.firebasestorage.app",
  messagingSenderId: "984192110931",
  appId: "1:984192110931:web:d7392a9815ab248c6391a6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* ✅ FULL SERVERS DATA (FROM YOUR FILE — NOT CUT) */
const servers = [
  {
    code: "M5R9X1NY",
    id: 1,
    name: "Erratic SMP",
    desc: "Good MultiCraft SMP with no areas, and more very cool features.",
    author: "RedWorld",
    bg: "bgs/bg1.png",
    heart: "hearts/hpvp.png"
  },
  {
    code: "KAAYBNDP",
    id: 2,
    name: "Ronaldo Vs Messi",
    desc: "BEST SERVER 👌, PARKOUR / PvP / MINI GAMES / BEDWARS / MANHUNT / TREASURE HUNT / BRIDGING / AXE PVP / AND MANY MORE .. ✨",
    author: "Elder",
    bg: "bgs/bg2.png",
    heart: "hearts/hpvp.png"
  },
  {
    code: "MCSRVR03",
    id: 3,
    name: "FlatWorld",
    desc: "Creative Server",
    author: "Unknown",
    bg: "bgs/bg3.png",
    heart: "hearts/hc.png"
  },
  {
    code: "JLIVC3V9",
    id: 4,
    name: "New Types PvP",
    desc: "Awesome PvP server, with a lot fun features and gamemodes.",
    author: "Unknown",
    bg: "bgs/bg4.png",
    heart: "hearts/hpvp.png"
  },
  {
    code: "94D92LVD",
    id: 5,
    name: "SMP12",
    desc: "In here, it's your job to have fun! The world open, PVP; it's a place where you can do anything!",
    author: "Jared12",
    bg: "bgs/bg5.png",
    heart: "hearts/hpvp.png"
  },
  {
    code: "XX9IXQ6H",
    id: 6,
    name: "Stone Simulator",
    desc: "In here, we live underground! Also, we buy items from The Shop! With currencies such as Stone, Cobblestone, and more!",
    author: "Jared12",
    bg: "bgs/bg6.png",
    heart: "hearts/hpvp.png"
  },
  {
    code: "QVZACNG5",
    id: 7,
    name: "Parkour Cubicles",
    desc: "In here, YOU will try to beat the impossible 36 cubicles of the server to escape!",
    author: "Jared12",
    bg: "bgs/bg7.png",
    heart: "hearts/hpvp.png"
  }
];

/* 🚀 UPLOAD TO FIREBASE */
async function upload() {
  for (const s of servers) {
    await setDoc(doc(db, "servers", s.code), {
      id: s.id,
      name: s.name,
      desc: s.desc,
      author: s.author,
      code: s.code,
      bg: s.bg,
      heart: s.heart,

      // NEW SYSTEM FIELDS
      visits: 0,
      lastVisits: 0,
      likes: 0,
      dislikes: 0
    });

    console.log("Uploaded:", s.name);
  }

  console.log("✅ ALL SERVERS UPDATED SUCCESSFULLY");
}

upload();
