---
source_path: "documentation/AVFAudio/avaudiopcmbuffer/framelength.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiopcmbuffer/framelength"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:framelength:0000:0001">frameLength</span>

<span class="ko-segment" data-segment-id="seg:paragraph:framelength:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:framelength:0002:0001">버퍼의 유효한 샘플 프레임 수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:framelength:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:framelength:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:framelength:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:framelength:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:framelength:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:framelength:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:framelength:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:framelength:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var frameLength: AVAudioFrameCount { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">You can use this option only with the <a href="avaudiosession/category-swift.struct/record.md">@@TOKEN_0@@</a> and <a href="avaudiosession/category-swift.struct/playandrecord.md">@@TOKEN_1@@</a> categories.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002"><code>frameLength</code> 길이는 버퍼의 <a href="avaudiopcmbuffer/framecapacity.md">@@TOKEN_1@@</a>보다 작거나 같아야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">비인터리브 형식의 경우 <a href="avaudiopcmbuffer/framecapacity.md">@@TOKEN_0@@</a>는 한 채널의 오디오 샘플 수를 나타냅니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">버퍼 내용을 수정하는 작업의 일부로 버퍼의 길이를 수정할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002"><code>frameLength</code>를 수정하면 기본 <a href="https://developer.apple.com/documentation/CoreAudioTypes/AudioBufferList">@@TOKEN_1@@</a> 구조의 각 <code>AudioBuffer</code> 속성에서 대응하는 <code>mDataByteSize</code> 필드가 갱신되며 그 반대도 마찬가지입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avaudiopcmbuffer/framecapacity.md">var frameCapacity: AVAudioFrameCount</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">버퍼 용량(오디오 샘플 프레임 단위)입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiopcmbuffer/framelength">View on Apple Developer</a>*</span>
