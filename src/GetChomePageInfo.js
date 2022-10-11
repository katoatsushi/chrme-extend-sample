import React, { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import { useAsyncCallback } from 'react-async-hook'
import Box from '@mui/material/Box'
// import CircularIntegration from './circularintegration.js';

const initialState = {
  file: null,
}
const GetChromePageInfo = () => {
  const inputRef = useRef(null)
  const [formState, setFormState] = useState(initialState)
  const [success, setSuccess] = useState(false)

  const uploadFile = async(file) => {
    if (!file) return

    /* アップロード処理に見立てた時間のかかる処理 */
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
    await sleep(5000)

    /* アップロード処理が成功したらフォームの状態を
       初期化してsuccessステートをtrueにする */
    setFormState(initialState)
    setSuccess(true)
  }

  const onFileInputChange = async (event) => {
    const file = event.target.files[0]
    await uploadFile(file)
  }

  const clickFileUploadButton = () => {
    setSuccess(false)
    inputRef.current.click()
  }

  const asyncEvent = useAsyncCallback(onFileInputChange);

  return (
    <Box>
      ファイルをアップロードしてください
      <input
        hidden
        ref={inputRef}
        type="file"
        onChange={asyncEvent.execute}
      />
    </Box>
  )
}
export default GetChromePageInfo
