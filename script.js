/*
  28 DAYS OF JERYY
  -----------------
  IMPORTANT:
  1. Change BIRTHDAY_YEAR if needed.
  2. Replace image paths in the memories array.
  3. Replace the text with your real memories.
  4. Keep the folder structure:
       index.html
       style.css
       script.js
       assets/
         day02.jpg
         day03.jpg
         ...
*/

const BIRTHDAY_YEAR = 2026;
const BIRTHDAY_MONTH = 8; // September
const BIRTHDAY_DAY = 28;

const UNLOCK_HOUR = 23;   // 11 PM
const UNLOCK_MINUTE = 25; // 25 minutes

const memories = [
  {
    day: 1,
    date: "SEPTEMBER 01",
    tag: "THE BEGINNING",
    title: "28 days. 28 little moments.",
    text: "This is only the beginning. Every day, one small piece of a bigger story will be waiting here. Come back tomorrow… there is more. ❤️",
    image: " ",
    quote: "Some stories are made of big moments. Ours is made of little ones."
  },
  {
    day: 2,
    date: "SEPTEMBER 02",
    tag: "A LITTLE MEMORY",
    title: "Okay... You Came Back. 👀",
    text: "I Wanted The First Real Surprise To Be Simple. Just One Moment, One Picture, and One Memory That Deserves To Stay.",
    image: "assets/day02.png",
    quote: "I Know You Remember This Moment, The Very First Surprise From My Side.."
  },
  {
    day: 3,
    date: "SEPTEMBER 03",
    tag: "THAT MOMENT",
    title: "That Moment.",
    text: "There are Some Pictures Where the Person Itself Is Not The Special Part. But Accessories Play a Major Role :) ",
    image: "assets/day03.jpg",
    quote: "Some Surprises Makes More Memories and Create Moments"
  },
  {
    day: 4,
    date: "SEPTEMBER 04",
    tag: "THE FUNNY ONE",
    title: "We really did that. 😂",
    text: "A completely unserious memory that somehow became one of the moments I still remember and laugh about.",
    image: "assets/day04.jpg",
    quote: "The best memories usually start with 'this is probably a bad idea.'"
  },
  {
    day: 5,
    date: "SEPTEMBER 05",
    tag: "THROWBACK",
    title: "Look how far we've come.",
    text: "A little throwback today. Different time, different version of us, but somehow the same familiar feeling.",
    image: "assets/day05.jpg",
    quote: "Time changes pictures. It does not always change the feeling."
  },
  {
    day: 6,
    date: "SEPTEMBER 06",
    tag: "A RANDOM MOMENT",
    title: "It was just a normal day.",
    text: "Nothing dramatic. Nothing planned. Just one of those ordinary moments that became memorable because you were there.",
    image: "assets/day06.jpg",
    quote: "Ordinary days become special when the right person is part of them."
  },
  {
    day: 7,
    date: "SEPTEMBER 07",
    tag: "ONE WEEK",
    title: "7 little moments.",
    text: "One week already. So here is a tiny reminder that the first seven days were only the opening chapter.",
    image: "assets/day07.jpg",
    quote: "Seven days down. A lot more memories to uncover."
  },
  {
    day: 8,
    date: "SEPTEMBER 08",
    tag: "FAVOURITE PHOTO",
    title: "One of my favourites.",
    text: "I have a lot of photos to choose from, but this one always finds its way back to the top.",
    image: "assets/day08.jpg",
    quote: "Some photos just feel like home."
  },
  {
    day: 9,
    date: "SEPTEMBER 09",
    tag: "A MESSAGE",
    title: "A small thing I wanted to say.",
    text: "Not every important thing needs a big speech. Sometimes a simple 'I'm glad you are in my life' is enough.",
    image: "assets/day09.jpg",
    quote: "The little things we say can stay with someone for a long time."
  },
  {
    day: 10,
    date: "SEPTEMBER 10",
    tag: "OUR CHAOS",
    title: "Proof that we have no normal conversations.",
    text: "Today's memory is here purely because looking at it made me laugh again.",
    image: "assets/day10.jpg",
    quote: "Normal is overrated anyway."
  },
  {
    day: 11,
    date: "SEPTEMBER 11",
    tag: "THINGS THAT REMIND ME",
    title: "Little things = you.",
    text: "A place, a song, a phrase, a random joke… sometimes the smallest things unexpectedly bring a person to mind.",
    image: "assets/day11.jpg",
    quote: "Funny how a tiny thing can suddenly remind you of someone."
  },
  {
    day: 12,
    date: "SEPTEMBER 12",
    tag: "YOU FORGOT THIS ONE",
    title: "You probably forgot this photo. 😭",
    text: "I didn't. So naturally, it had to make an appearance here.",
    image: "assets/day12.jpg",
    quote: "Some forgotten pictures deserve a second life."
  },
  {
    day: 13,
    date: "SEPTEMBER 13",
    tag: "A FAVOURITE MEMORY",
    title: "If I had to pick one...",
    text: "This would be somewhere very high on the list. Not because it was perfect, but because it felt real.",
    image: "assets/day13.jpg",
    quote: "The memories we keep are rarely the ones we planned."
  },
  {
    day: 14,
    date: "SEPTEMBER 14",
    tag: "HALFWAY",
    title: "Halfway there. ✨",
    text: "14 days. 14 little pieces. And now we are halfway to the day this whole thing was made for.",
    image: "assets/day14.jpg",
    quote: "Half the countdown is over. The best part is still waiting."
  },
  {
    day: 15,
    date: "SEPTEMBER 15",
    tag: "HOW I SEE YOU",
    title: "If I had to describe you...",
    text: "I could probably write pages. But for today, I will just say this: you make ordinary moments feel a little less ordinary.",
    image: "assets/day15.jpg",
    quote: "Some people become part of your favourite memories without even trying."
  },
  {
    day: 16,
    date: "SEPTEMBER 16",
    tag: "ANOTHER FUNNY ONE",
    title: "Still makes me laugh.",
    text: "There are memories that age like fine wine, and then there are ours that somehow become funnier every time.",
    image: "assets/day16.jpg",
    quote: "Same joke. Same laugh. Still worth it."
  },
  {
    day: 17,
    date: "SEPTEMBER 17",
    tag: "A PLACE",
    title: "A place with a memory.",
    text: "Sometimes a location becomes special simply because of what happened there.",
    image: "assets/day17.jpg",
    quote: "Places remember things too, if only in our minds."
  },
  {
    day: 18,
    date: "SEPTEMBER 18",
    tag: "A LITTLE SECRET",
    title: "You probably don't know this...",
    text: "Here is a tiny thing I have wanted to tell you. [Replace this with your own personal message.]",
    image: "assets/day18.jpg",
    quote: "Not every thought gets said out loud."
  },
  {
    day: 19,
    date: "SEPTEMBER 19",
    tag: "CANDID",
    title: "The unplanned one.",
    text: "Honestly, candid photos sometimes beat the perfectly posed ones. They feel more like the actual moment.",
    image: "assets/day19.jpg",
    quote: "Unplanned. Unfiltered. Unforgettable."
  },
  {
    day: 20,
    date: "SEPTEMBER 20",
    tag: "OUR TIMELINE",
    title: "A little timeline of us.",
    text: "From the first few memories to all the random moments after that — this is only a tiny snapshot of the journey.",
    image: "assets/day20.jpg",
    quote: "One moment became another, and somehow we ended up here."
  },
  {
    day: 21,
    date: "SEPTEMBER 21",
    tag: "21 MOMENTS",
    title: "21 days. So many memories.",
    text: "Three weeks into September. If these days have proved anything, it is that there are way too many moments to fit into one website.",
    image: "assets/day21.jpg",
    quote: "Twenty-one days down. The countdown is getting real."
  },
  {
    day: 22,
    date: "SEPTEMBER 22",
    tag: "A SONG",
    title: "A song that reminds me of you. 🎵",
    text: "Every person has that one song, sound or lyric that somehow becomes attached to a memory. This is yours.",
    image: "assets/day22.jpg",
    quote: "Some memories have a soundtrack."
  },
  {
    day: 23,
    date: "SEPTEMBER 23",
    tag: "THINGS UNSAID",
    title: "Things I never really said.",
    text: "This is where you can put the things you genuinely want her to know. Keep it honest, simple and completely yours.",
    image: "assets/day23.jpg",
    quote: "Some words take time to find their way out."
  },
  {
    day: 24,
    date: "SEPTEMBER 24",
    tag: "INSIDE JOKES",
    title: "Nobody else would understand. 😂",
    text: "A collection of the weird little jokes, phrases and references that make absolutely no sense to anyone else.",
    image: "assets/day24.jpg",
    quote: "If nobody else gets it, that probably makes it better."
  },
  {
    day: 25,
    date: "SEPTEMBER 25",
    tag: "FROM THE HEART",
    title: "Three days left.",
    text: "The countdown is almost over. So today's surprise is a little more personal.",
    image: "assets/day25.jpg",
    quote: "Three days. One birthday. A whole lot of memories."
  },
  {
    day: 26,
    date: "SEPTEMBER 26",
    tag: "THE PHOTO DUMP",
    title: "A few more favourites.",
    text: "No long story today. Just some photos that deserved to be here.",
    image: "assets/day26.jpg",
    quote: "Because one favourite photo was never going to be enough."
  },
  {
    day: 27,
    date: "SEPTEMBER 27",
    tag: "ONE DAY TO GO",
    title: "Tomorrow. ❤️",
    text: "Tomorrow is the day. The countdown that started on September 1 is almost at the end. There is only one more sleep before everything unlocks.",
    image: "assets/day27.jpg",
    quote: "One more day. Then the final surprise."
  },
  {
    day: 28,
    date: "SEPTEMBER 28",
    tag: "THE BIG REVEAL",
    title: "Happy Birthday, Jeryy! 🎂❤️",
    text: "Today is not just another day. It is your day. And this little website was my way of collecting some of the moments, laughs and memories that make you special to me.",
    image: "assets/day28.jpg",
    quote: "Some people deserve more than one birthday wish."
  }
];

const $ = (id) => document.getElementById(id);

let today = new Date();
let currentDay = getUnlockedDay(today);

function getUnlockDate(day) {
  return new Date(
    BIRTHDAY_YEAR,
    BIRTHDAY_MONTH,
    day,
    UNLOCK_HOUR,
    UNLOCK_MINUTE,
    0
  );
}


function getBirthdayDate() {
  return getUnlockDate(BIRTHDAY_DAY);
}


function getUnlockedDay(date = new Date()) {

  // Day 1 is available from September 1
  const start = new Date(
    BIRTHDAY_YEAR,
    BIRTHDAY_MONTH,
    1,
    0,
    0,
    0
  );

  // Before September 1
  if (date < start) {
    return 1;
  }

  let unlockedDay = 1;

  // Check every day from Day 2 to Day 28
  for (let day = 2; day <= 28; day++) {

    const unlockTime = getUnlockDate(day);

    if (date >= unlockTime) {
      unlockedDay = day;
    } else {
      break;
    }
  }

  return unlockedDay;
}

function pad(n) {
  return String(n).padStart(2, "0");
}

function renderDay(day) {
  const item = memories[day - 1];
  if (!item) return;

  $("dateLabel").textContent = `${item.date} · DAY ${pad(item.day)}`;
  $("memoryDay").textContent = `DAY ${pad(item.day)}`;
  $("memoryTag").textContent = item.tag;
  $("memoryTitle").textContent = item.title;
  $("memoryText").textContent = item.text;
  $("quote").textContent = item.quote;
  $("progressText").textContent = `DAY ${pad(item.day)} OF 28`;
  $("progressBar").style.width = `${(item.day / 28) * 100}%`;

  const image = $("memoryImage");
  const placeholder = $("imagePlaceholder");

  if (item.image) {
    image.src = item.image;
    image.alt = item.title;
    image.onload = () => {
      image.style.display = "block";
      placeholder.style.display = "none";
    };
    image.onerror = () => {
      image.style.display = "none";
      placeholder.style.display = "flex";
    };
  } else {
    image.style.display = "none";
    image.removeAttribute("src");
    placeholder.style.display = "flex";
  }

  $("prevBtn").disabled = item.day <= 1;
  $("nextBtn").disabled = item.day >= getUnlockedDay();

  document.querySelectorAll(".day-button").forEach(btn => {
    btn.classList.toggle("active", Number(btn.dataset.day) === item.day);
  });

  if (item.day === 28) {
    document.body.classList.add("birthday-mode");
    $("finalLetter").classList.remove("hidden");
    $("finalText").textContent =
      "Happy Birthday ❤️\n\n" +
      "I hope this little journey made your September a little more memorable. " +
      "There are probably hundreds of things I could say, but I wanted to let the memories do most of the talking.\n\n" +
      "Thank you for all the laughs, random conversations, silly moments and happy memories. " +
      "I hope this new year of your life gives you many more reasons to smile.\n\n" +
      "Have the happiest birthday, Jeryy. You deserve a beautiful day. ❤️";
    $("footerText").textContent = "The countdown is over. The memories stay. ❤️";
    $("lockState").textContent = "● BIRTHDAY UNLOCKED";
  } else {
    document.body.classList.remove("birthday-mode");
    $("finalLetter").classList.add("hidden");
    $("footerText").textContent = "Another surprise coming soon... 👀";
    $("lockState").textContent = "● LIVE";
  }
}

function buildCalendar() {
  const grid = $("dayGrid");
  grid.innerHTML = "";

  const unlocked = getUnlockedDay();

  memories.forEach(item => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "day-button";
    button.dataset.day = item.day;

    const isUnlocked = item.day <= unlocked;
    if (isUnlocked) button.classList.add("unlocked");
    else button.classList.add("locked");

    button.innerHTML = `
      <strong>${pad(item.day)}</strong>
      <small>${isUnlocked ? item.tag : "Locked 🔒"}</small>
    `;

    if (isUnlocked) {
      button.addEventListener("click", () => {
        currentDay = item.day;
        renderDay(currentDay);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    } else {
      button.addEventListener("click", () => {
        showToast(`Day ${pad(item.day)} unlocks on September ${item.day}. ❤️`);
      });
    }

    grid.appendChild(button);
  });
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2800);
}

function updateCountdown() {
  const now = new Date();
  const target = getBirthdayDate();
  let diff = target - now;

  if (diff <= 0) {
    $("days").textContent = "00";
    $("hours").textContent = "00";
    $("minutes").textContent = "00";
    $("seconds").textContent = "00";
    return;
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(diff / day);
  diff %= day;
  const hours = Math.floor(diff / hour);
  diff %= hour;
  const minutes = Math.floor(diff / minute);
  diff %= minute;
  const seconds = Math.floor((diff % minute) / second);

  $("days").textContent = pad(days);
  $("hours").textContent = pad(hours);
  $("minutes").textContent = pad(minutes);
  $("seconds").textContent = pad(seconds);
}

$("prevBtn").addEventListener("click", () => {
  if (currentDay > 1) {
    currentDay--;
    renderDay(currentDay);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

$("nextBtn").addEventListener("click", () => {
  const unlocked = getUnlockedDay();
  if (currentDay < unlocked) {
    currentDay++;
    renderDay(currentDay);
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    showToast("That surprise isn't unlocked yet... come back on the right day. 👀");
  }
});

buildCalendar();
renderDay(currentDay || 1);
updateCountdown();
setInterval(updateCountdown, 1000);

// If the page stays open across midnight, refresh the unlocked calendar/day state.
setInterval(() => {
  const newUnlocked = getUnlockedDay();
  if (newUnlocked !== getUnlockedDay(today)) {
    today = new Date();
    buildCalendar();
    if (currentDay > newUnlocked) currentDay = newUnlocked;
    renderDay(currentDay || 1);
  }
}, 30000);
