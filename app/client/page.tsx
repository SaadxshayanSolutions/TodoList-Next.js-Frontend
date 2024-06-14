"use client"
import React, {createRef, RefObject, useEffect, useImperativeHandle, useMemo, useRef, useState} from 'react'

const Client = () => {

  const [elRefs, setElRefs] = useState<RefObject<{ save: () => void }>[]>([]);

  const myArr : number[] = [0,1,2];

  const [sections,setSections] = useState([0,1,2])

  const visibleSections = useMemo(
    () => sections.filter((section) => section).map((value) => value),
    [sections]
  );
  const sectionsLength = visibleSections.length;

  useEffect(() => {
    // add or remove refs
    setElRefs((elRefs) =>
      Array(3)
        .fill(null)
        .map((_, i) => elRefs[i] || createRef())
    );
    console.log(elRefs)
  }, [sectionsLength]);

  const handleClose = () => {
    Promise.allSettled(elRefs.map((ref) => ref.current?.save?.()))
    console.log(elRefs)
  }
  return (
    <div className='flex flex-col justify-start space-y-4'>
      {
        myArr.map(num => {

          return <MyComponent ref={elRefs[num]} />

        })
      }
      <button onClick = {handleClose}>Console</button>
    </div>
  );
}

const MyComponent = React.forwardRef((props, ref) => {

  const [value,setValue] = useState("")

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const save = () => {
    if(value) {
      console.log(value)
    } else {
      console.log('nothing')
    }
  }

  useImperativeHandle(ref, () => ({
    // Define custom methods or properties
    save
  }));

  return <input value = {value} onChange ={handleChange}/>;
});
export default Client 