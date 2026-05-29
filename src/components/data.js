import {
  Ban,
  Brain,
  Skull,
  Users,
  HandMetal,
  CircleSlash,
  Wifi,
} from 'lucide-react';
import antRally from '../assets/ant-rally.png';
import memeCat from '../assets/meme-cat.png';
import memeJumle from '../assets/meme-jumle.png';
import memeResume from '../assets/meme-resume.png';
import memeWork from '../assets/meme-work.png';

export const navItems = ['Home', 'About', 'Manifesto', 'Memes', 'Join Us'];

export const principles = [
  {
    icon: Users,
    title: 'With The People',
    text: 'Hum aapke saath hain.',
  },
  {
    icon: HandMetal,
    title: 'Against Corruption',
    text: 'Na khayenge, na khane denge.',
  },
  {
    icon: CircleSlash,
    title: 'Against Fake Promises',
    text: 'Ab bas. Bohot ho gaya.',
  },
  {
    icon: Skull,
    title: 'Against Toxic Politics',
    text: 'Waqt badlega, system bhi.',
  },
];

export const missions = [
  {
    eyebrow: 'Mission 01',
    title: 'Emotional Support Leave',
    copy: 'Mental health > Toxic work culture',
    icon: Brain,
    tone: 'dark',
  },
  {
    eyebrow: 'Mission 02',
    title: 'Free Wifi For All',
    copy: "Internet is not luxury, it's a right.",
    icon: Wifi,
    tone: 'blue',
  },
  {
    eyebrow: 'Mission 03',
    title: 'Anti Overthinking Program',
    copy: 'Overthinking se azaadi, productivity ki guarantee.',
    icon: Brain,
    tone: 'orange',
  },
  {
    eyebrow: 'Mission 04',
    title: 'No More Fake Promises',
    copy: 'Jumle nahi, results chahiye!',
    icon: Ban,
    tone: 'dark',
  },
];

export const memes = [
  {
    image: memeCat,
    alt: 'Meme card about needing experience for a job',
  },
  {
    image: memeResume,
    alt: 'Meme card about applying with the same resume',
  },
  {
    image: memeWork,
    alt: 'Meme card about working twenty four seven',
  },
  {
    image: memeJumle,
    alt: 'Meme card about monthly EMI',
  },
];
