export interface MusicTrack{
  artist:string;
  song:string;
  title:string;
  png:string;
}

import track1 from '/music/Jason_Derulo_SAVAGE_LOVE_Lyrics_Prod_Jawsh_685_fRrkXJu4OeE.m4a'
import cover1 from '/Cover_art/savage_love.png'
import track2 from '/music/2_days_into_college- Aimee_Carty.m4a'
import cover2 from '/Cover_art/2days_into_college.jpg'
import track3 from '/music/Akon_Lonely.m4a'
import cover3 from '/Cover_art/Akon-Lonely.jpg'

export const  MusicList : MusicTrack[] = [
  {
    artist: 'Jason Derulo',
    song :track1,
    title:'Savage Love',
    png: cover1,
  },{
    artist: 'Aimee Carty',
    song :track2,
    title:'2 Days Into College',
    png: cover2,
  },{
    artist: 'Akon',
    song :track3,
    title:'Lonely',
    png: cover3,
  },
]
