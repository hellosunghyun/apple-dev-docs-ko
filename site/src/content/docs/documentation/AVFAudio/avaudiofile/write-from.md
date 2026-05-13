---
source_path: "documentation/AVFAudio/avaudiofile/write-from.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiofile/write-from"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:writefrom:0000:0001">write(from:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:writefrom:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:writefrom:0002:0001">오디오 버퍼를 순차적으로 씁니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:writefrom:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:writefrom:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:writefrom:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:writefrom:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:writefrom:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:writefrom:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:writefrom:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:writefrom:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func write(from buffer: AVAudioPCMBuffer) throws
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">버퍼의 <a href="avaudiopcmbuffer/framelength.md">@@TOKEN_0@@</a>는 이 메서드가 버퍼에서 작성하는 양을 나타냅니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>buffer</code>: 파일에 쓰기 위한 버퍼입니다. 형식은 파일의 처리 형식과 일치해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiofile/read(into:">func read(into: AVAudioPCMBuffer) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">오디오 버퍼 전체를 읽습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiofile/read(into:framecount:">func read(into: AVAudioPCMBuffer, frameCount: AVAudioFrameCount) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정한 프레임 수를 사용하여 오디오 버퍼의 일부를 읽습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiofile/close.md">func close()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">오디오 파일을 닫습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiofile/write(from:">View on Apple Developer</a>)*</span>
