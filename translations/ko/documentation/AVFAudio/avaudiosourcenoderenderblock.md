---
source_path: "documentation/AVFAudio/avaudiosourcenoderenderblock.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosourcenoderenderblock"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudiosourcenoderenderblock:0000:0001">AVAudioSourceNodeRenderBlock</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosourcenoderenderblock:0001:0001">**Framework**: AVFAudio **Kind**: typealias</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosourcenoderenderblock:0002:0001">오디오 소스 노드에 오디오 데이터를 제공하는 블록입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosourcenoderenderblock:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudiosourcenoderenderblock:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosourcenoderenderblock:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosourcenoderenderblock:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosourcenoderenderblock:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosourcenoderenderblock:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosourcenoderenderblock:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosourcenoderenderblock:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
typealias AVAudioSourceNodeRenderBlock = (UnsafeMutablePointer<ObjCBool>, UnsafePointer<AudioTimeStamp>, AVAudioFrameCount, UnsafeMutablePointer<AudioBufferList>) -> OSStatus
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">A voice for the specified identifier if the identifier is valid and the voice is available on the device; otherwise, <code>nil</code>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0002">오류를 반환하는 경우 오디오 데이터는 유효하지 않은 것으로 간주합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>identifier</code>: The unique identifier for a voice.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>timestamp</code>: 오디오 데이터를 렌더링하는 HAL 시간입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>frameCount</code>: 엔진이 요청하는 오디오 데이터의 샘플 프레임 수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0004"><code>outputData</code>: 출력 데이터입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">관련 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avspeechsynthesisvoice/init(language:">init(renderBlock: AVAudioSourceNodeRenderBlock)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">오디오 데이터를 제공하는 블록으로 오디오 소스 노드를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avspeechsynthesisvoice/speechvoices.md">init(format: AVAudioFormat, renderBlock: AVAudioSourceNodeRenderBlock)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">오디오 형식과 오디오 데이터를 제공하는 블록으로 오디오 소스 노드를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosourcenoderenderblock">View on Apple Developer</a>*</span>
