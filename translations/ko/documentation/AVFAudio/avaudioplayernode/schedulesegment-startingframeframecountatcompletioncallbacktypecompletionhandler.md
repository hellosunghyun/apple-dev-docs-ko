---
source_path: "documentation/AVFAudio/avaudioplayernode/schedulesegment-startingframeframecountatcompletioncallbacktypecompletionhandler.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudioplayernode/schedulesegment-startingframeframecountatcompletioncallbacktypecompletionhandler"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:schedulesegmentstartingframeframecountatcompletioncallbacktypecompletionhandler:0000:0001">scheduleSegment(_:startingFrame:frameCount:at:completionCallbackType:completionHandler:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:schedulesegmentstartingframeframecountatcompletioncallbacktypecompletionhandler:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:schedulesegmentstartingframeframecountatcompletioncallbacktypecompletionhandler:0002:0001">지정한 콜백 옵션으로 오디오 파일 세그먼트 재생을 예약합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:schedulesegmentstartingframeframecountatcompletioncallbacktypecompletionhandler:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:schedulesegmentstartingframeframecountatcompletioncallbacktypecompletionhandler:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:schedulesegmentstartingframeframecountatcompletioncallbacktypecompletionhandler:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:schedulesegmentstartingframeframecountatcompletioncallbacktypecompletionhandler:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:schedulesegmentstartingframeframecountatcompletioncallbacktypecompletionhandler:0004:0004">macOS 10.13+</span>
- <span class="ko-segment" data-segment-id="seg:list:schedulesegmentstartingframeframecountatcompletioncallbacktypecompletionhandler:0004:0005">tvOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:schedulesegmentstartingframeframecountatcompletioncallbacktypecompletionhandler:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:schedulesegmentstartingframeframecountatcompletioncallbacktypecompletionhandler:0004:0007">watchOS 4.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func scheduleSegment(_ file: AVAudioFile, startingFrame startFrame: AVAudioFramePosition, frameCount numberFrames: AVAudioFrameCount, at when: AVAudioTime?, completionCallbackType callbackType: AVAudioPlayerNodeCompletionCallbackType) async -> AVAudioPlayerNodeCompletionCallbackType
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0008:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0001"><code>file</code>: 재생할 파일입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0002"><code>startFrame</code>: 스트림에서 시작 프레임 위치입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0003"><code>numberFrames</code>: 재생할 프레임 수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0004"><code>when</code>: 구간이 재생되는 시간입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0005"><code>callbackType</code>: 시스템이 완료 핸들러를 호출해야 하는 시점을 지정하는 옵션입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0006"><code>completionHandler</code>: 시스템이 렌더 스레드에서 세그먼트 재생을 예약한 후 또는 플레이어가 중지될 때 호출하는 핸들러입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">관련 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avaudioplayernode/schedulefile(_:at:completionhandler:">func scheduleFile(AVAudioFile, at: AVAudioTime?, completionHandler: (() -&gt; Void)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">전체 오디오 파일 재생을 예약합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avaudioplayernode/schedulefile(_:at:completioncallbacktype:completionhandler:">func scheduleFile(AVAudioFile, at: AVAudioTime?, completionCallbackType: AVAudioPlayerNodeCompletionCallbackType, completionHandler: ((AVAudioPlayerNodeCompletionCallbackType) -&gt; Void)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">지정한 콜백 옵션으로 전체 오디오 파일의 재생을 예약합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avaudioplayernode/schedulesegment(_:startingframe:framecount:at:completionhandler:">func scheduleSegment(AVAudioFile, startingFrame: AVAudioFramePosition, frameCount: AVAudioFrameCount, at: AVAudioTime?, completionHandler: (() -&gt; Void)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">오디오 파일 세그먼트 재생을 예약합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avaudioplayernode/schedulebuffer(_:at:options:completionhandler:">func scheduleBuffer(AVAudioPCMBuffer, at: AVAudioTime?, options: AVAudioPlayerNodeBufferOptions, completionHandler: (() -&gt; Void)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">지정한 시간과 재생 옵션으로 오디오 버퍼의 샘플 재생을 예약합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avaudioplayernode/schedulebuffer(_:completionhandler:">func scheduleBuffer(AVAudioPCMBuffer, completionHandler: (() -&gt; Void)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">오디오 버퍼의 샘플 재생을 예약합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avaudioplayernode/schedulebuffer(_:at:options:completioncallbacktype:completionhandler:">func scheduleBuffer(AVAudioPCMBuffer, at: AVAudioTime?, options: AVAudioPlayerNodeBufferOptions, completionCallbackType: AVAudioPlayerNodeCompletionCallbackType, completionHandler: ((AVAudioPlayerNodeCompletionCallbackType) -&gt; Void)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">지정한 재생 옵션으로 오디오 버퍼의 샘플 재생을 예약합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avaudioplayernode/schedulebuffer(_:completioncallbacktype:completionhandler:">func scheduleBuffer(AVAudioPCMBuffer, completionCallbackType: AVAudioPlayerNodeCompletionCallbackType, completionHandler: ((AVAudioPlayerNodeCompletionCallbackType) -&gt; Void)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">지정한 콜백 옵션으로 오디오 버퍼의 샘플 재생을 예약합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avaudioplayernodebufferoptions.md">struct AVAudioPlayerNodeBufferOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">재생 스케줄링을 제어하는 버퍼 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avaudioplayernodecompletioncallbacktype.md">enum AVAudioPlayerNodeCompletionCallbackType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">프레임워크가 완료 핸들러를 호출할 시점을 지정하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="avaudioplayernodecompletionhandler.md">typealias AVAudioPlayerNodeCompletionHandler</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">버퍼 또는 파일 완료를 위한 콜백 핸들러입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudioplayernode/schedulesegment(_:startingframe:framecount:at:completioncallbacktype:completionhandler:">Apple Developer에서 보기</a>)*</span>
