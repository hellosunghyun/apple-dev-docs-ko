---
source_path: "documentation/AVFoundation/avsamplebufferaudiorenderer/audiotimepitchalgorithm.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorenderer/audiotimepitchalgorithm"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:audiotimepitchalgorithm:0000:0001">audioTimePitchAlgorithm</span>

<span class="ko-segment" data-segment-id="seg:paragraph:audiotimepitchalgorithm:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:audiotimepitchalgorithm:0002:0001">다양한 속도에서 오디오 피치를 조정하는 데 사용되는 처리 알고리즘입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:audiotimepitchalgorithm:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:audiotimepitchalgorithm:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:audiotimepitchalgorithm:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:audiotimepitchalgorithm:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:audiotimepitchalgorithm:0004:0004">macOS 10.13+</span>
- <span class="ko-segment" data-segment-id="seg:list:audiotimepitchalgorithm:0004:0005">tvOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:audiotimepitchalgorithm:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:audiotimepitchalgorithm:0004:0007">watchOS 4.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var audioTimePitchAlgorithm: AVAudioTimePitchAlgorithm { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">iOS의 기본값은 <a href="avaudiotimepitchalgorithm/lowqualityzerolatency.md">@@TOKEN_0@@</a>이고, macOS의 기본값은 <a href="avaudiotimepitchalgorithm/timedomain.md">@@TOKEN_1@@</a>입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">기기는 <a href="avqueuedsamplebufferrendering/timebase.md">@@TOKEN_0@@</a>가 <a href="avaudiotimepitchalgorithm.md">@@TOKEN_1@@</a>에서 지원되지 않을 때 오디오를 자동으로 음소거합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">이 속성을 <a href="avqueuedsamplebufferrendering/timebase.md">@@TOKEN_0@@</a>가 <code>0.0</code>이 아닌 동안 수정하면 속도가 일시적으로 <code>0.0</code>으로 바뀔 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiotimepitchalgorithm.md">struct AVAudioTimePitchAlgorithm</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">재생 속도 변경 시 오디오 피치를 설정하는 데 사용되는 알고리즘입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorenderer/audiotimepitchalgorithm">View on Apple Developer</a>*</span>
