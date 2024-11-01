import React, { createContext } from "react";
import {
  IconPlayerPlayFilled,
  IconPhoto,
  IconMapPin,
  IconVideo,
  IconRefresh,
  IconPlayerPlay,
  IconMicrophone,
  IconPlayerPause,
  IconTrashX,
  IconMinus,
  IconPlus,
  IconSettings
} from "@tabler/icons-react";
import Button from "../components/Button";
import IconWaveForm from "@public/icons/wave-form.svg";
import IconVolume from "@public/icons/volume.svg";
import IconAudio from "@public/icons/audio.svg"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../components/ui/Resizable";
import ChapterReading from "../editor/ChapterReading";
import QuestionCard from "../editor/QuestionCard";
import { Textarea } from "../components/ui/TextArea";
import { ScrollArea, ScrollBar } from "../components/ui/ScrollArea";
import { Badge } from "../components/ui/Badge";
import MediaPlayer from "../components/MediaPlayer";
import ButtonGroups from "../components/ButtonGroup";
import CustomSelect from "../components/ui/Select";

const sources = [
  { value: 'audio', label: 'Audio' },
  { value: 'video', label: 'Video' },

];
const speeds = [
  { value: '2x', label: '2x' },
  { value: '4x', label: '4x' },

];
export default function Editor() {
  return (
    <div className="w-screen flex h-[calc(100vh-3.75rem)]  flex-col  ">
      <ResizablePanelGroup direction="horizontal" className="w-full h-[75%]">
        <ResizablePanel defaultSize={75}>
          <ResizablePanelGroup direction="vertical" className="w-full">
            <ResizablePanel defaultSize={58}>
              <ResizablePanelGroup direction="horizontal" className="w-full ">
                <ResizablePanel defaultSize={50}>
                  <MediaPlayer type="image" source="/images/media.png" />

                  <MediaPlayer type="video" source="8ddBB8r6_KA" />


                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={50}>
                  <ChapterReading
                    version="NLT"
                    chapterName="Mark"
                    verse="1"
                    scripture="John the Baptist Prepares the Way
1 This is the Good News about Jesus the Messiah, the Son of God. It began 2
just as the prophet Isaiah had written:
&quot;Look, I am sending my messenger ahead of you,
and he will prepare your way.
3 He is a voice shouting in the wilderness,
'Prepare the way for the Lord's coming!
Clear the road for him!&quot;
4 This messenger was John the Baptist. He was in the wilderness and
preached that people should be baptized to show that they had repented of
their sins and turned to God to be forgiven. 5 All of Judea, including all the
people of Jerusalem, went out to see and hear John. And when they
confessed their sins, he baptized them in the Jordan River."
                  />
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={25}>
          <ScrollArea className="w-full h-full overflow-y-auto pb-2">
            <ScrollBar orientation="vertical" />

            <div className="flex items-center sticky dark:bg-zinc-950 bg-white  top-0 z-20 gap-[5px] border-b py-2.5 px-2 dark:border-zinc-900 border-zinc-200 justify-center">
              <Button
                label="Discuss"
                className="dark:border-cyan-900 bg-cyan-100 hover:bg-cyan-200 dark:bg-cyan-950  border-cyan-300 text-cyan-700"
              />
              <Button label="Suggest" />
              <Button label="Checks" />
            </div>
            <div className="space-y-2.5   px-5 py-2.5">
              <QuestionCard isAudio />
              <QuestionCard isImage />
              <QuestionCard />

              <QuestionCard />
              <QuestionCard />
              <QuestionCard />




              <div className=" absolute bottom-0 pt-4 pb-[11px] bg-white dark:bg-zinc-950 w-full left-0 px-5">
                <div className="relative">
                  <Textarea
                    className="h-20"
                    placeholder="Ask AI Bot some questions"
                  />
                  <div className="flex absolute bottom-2.5 right-2.5 items-center gap-2.5">
                    <Button
                      size="icon"
                      className="dark:bg-cyan-500 bg-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-400 text-zinc-800 dark:text-black  dark:border-cyan-700"
                      icon={
                        <IconPhoto
                          size={12}
                          stroke={2}
                          strokeLinejoin="miter"
                        />
                      }
                    />
                    <Button
                      size="icon"
                      className="dark:bg-cyan-500 bg-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-400 text-zinc-800 dark:text-black  dark:border-cyan-700"
                      icon={
                        <IconMicrophone
                          size={12}
                          stroke={2}
                          strokeLinejoin="miter"
                        />
                      }
                    />
                    <Button
                      size="icon"
                      className="dark:bg-cyan-500 bg-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-400 text-zinc-800 dark:text-black  dark:border-cyan-700"
                      icon={
                        <IconPhoto
                          size={12}
                          stroke={2}
                          strokeLinejoin="miter"
                        />
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>

      <div className=" h-[25%]  border-t border-zinc-200 dark:border-zinc-900 ">
     <ButtonGroups />
     <IconAudio  />

      <div className="flex w-full">
<div className="w-[15%] flex flex-col gap-4 items-center ">
<span className="uppercase leading-3 dark:text-zinc-500 text-zinc-400 text-[10px]   font-medium ">Audio</span>
<CustomSelect
      options={sources}
      placeholder="Source"
      triggerClassName="w-fit h-5 uppercase gap-1 text-[10px] bg-cyan-400 text-zinc-50 rounded-full"
    />
</div>
<div className="w-[1px] h-7 mt-auto bg-gray-300 dark:bg-zinc-700" />
<div className="w-[15%] flex flex-col gap-4 items-center ">
<span className="uppercase leading-3 dark:text-zinc-500 text-zinc-400 text-[10px]   font-medium ">Speed</span>
<CustomSelect
      options={speeds}
      placeholder="2x"
      triggerClassName="w-fit h-5 uppercase gap-1 text-[10px] bg-cyan-400 text-zinc-50 rounded-full"
    />
</div>
<div className="w-[1px] h-7 mt-auto bg-gray-300 dark:bg-zinc-700" />
<div className="w-[40%] flex justify-between gap-7 px-16">
<div className="space-y-2">
<p className="uppercase dark:text-zinc-500 text-zinc-400 text-[10px]   font-medium ">Rewind</p>
<Button className="rounded-lg" icon={<IconRefresh
    size={14} 
    stroke={2}  
    strokeLinejoin="miter"
  />}/>
</div>
<div className="space-y-2">
<p className="uppercase dark:text-zinc-500 text-zinc-400 text-[10px]   font-medium ">Record</p>
<Button className="rounded-lg" icon={<IconMicrophone
    size={14} 
    stroke={2}  
    strokeLinejoin="miter"
  />}/>
</div>
<div className="space-y-2">
<p className="uppercase dark:text-zinc-500 text-zinc-400 text-[10px]   font-medium ">Play</p>
<Button     className="dark:bg-cyan-500 rounded-lg bg-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-400 text-zinc-800 dark:text-zinc-50  dark:border-cyan-700" 
 icon={<IconPlayerPlay
    size={14} 
    stroke={2}  
    strokeLinejoin="miter"
  />}/>
</div>
<div className="space-y-2">
<p className="uppercase dark:text-zinc-500 text-zinc-400 text-[10px]   font-medium ">Pause</p>
<Button className="rounded-lg" icon={<IconPlayerPause
    size={14} 
    stroke={2}  
    strokeLinejoin="miter"
  />}/>
</div>
<div className="space-y-2">
<p className="uppercase dark:text-zinc-500 text-zinc-400 text-[10px]   font-medium ">Delete</p>
<Button className="rounded-lg" icon={<IconTrashX
    size={14} 
    stroke={2}  
    strokeLinejoin="miter"
  />}/>
</div>
<div className="space-y-4">
<p className="uppercase dark:text-zinc-500 text-zinc-400 text-[10px] text-center  font-medium ">Volume</p>
<span className="flex items-center gap-x-2">
<IconMinus
    size={14} 
    stroke={2}  
    strokeLinejoin="miter"
    className="cursor-pointer dark:text-zinc-50 text-zinc-700"
  />
  <span className="bg-white rounded-full h-2 w-40 border relative">
  <span className="bg-cyan-400 rounded-full h-2 w-[70%] absolute  -bottom-[1px] -left-[1px]"></span>

  </span>
  <IconPlus
    size={14} 
    stroke={2}  
    strokeLinejoin="miter"
    className="cursor-pointer dark:text-zinc-50 text-zinc-700"

  />
</span>
</div>

</div>
<div className="w-[1px] h-7 mt-auto bg-gray-300 dark:bg-zinc-700" />
<div className="w-[20%] flex flex-col gap-4 items-center ">
<span className="uppercase leading-3 dark:text-zinc-500 text-zinc-400 text-[10px]   font-medium ">Takes</span>
<div className="flex items-center gap-[10px]">
<Button
                      className="dark:bg-green-500 rounded-full min-w-7 max-w-7 h-7 bg-green-400 hover:bg-green-500 dark:hover:bg-green-400 text-zinc-800 dark:text-zinc-50  dark:border-green-700"
                  label="A"
                    />
                    <Button
                      className="dark:bg-white border-cyan-400 rounded-full min-w-7 max-w-7 h-7 bg-white hover:bg-green-500  text-zinc-800 dark:text-black  dark:border-cyan-400"
                  label="B"
                    />
                    <Button
                      className="dark:bg-white border-cyan-400 rounded-full min-w-7 max-w-7 h-7 bg-white hover:bg-green-500  text-zinc-800 dark:text-black  dark:border-cyan-400"
                  label="C"
                    />
</div>

</div>
<div className="w-[1px] h-7 mt-auto bg-gray-300 dark:bg-zinc-700" />

<div className="w-[10%] flex flex-col gap-4 items-center ">
<p className="uppercase dark:text-zinc-500 text-zinc-400 text-[10px]   font-medium ">Settings</p>
<IconSettings
    size={24} 
    stroke={2}  
    strokeLinejoin="miter"
    className="dark:text-zinc-50 text-zinc-700"
  />
</div>
      </div>
      </div>
    </div>
  );
}
