---
source_path: "documentation/AVFAudio/avaudiounitdelay/feedback.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiounitdelay/feedback"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:feedback:0000:0001">feedback</span>

<span class="ko-segment" data-segment-id="seg:paragraph:feedback:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:feedback:0002:0001">딜레이 라인으로 다시 피드백되는 출력 신호의 양입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:feedback:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:feedback:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:feedback:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:feedback:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:feedback:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:feedback:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:feedback:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var feedback: Float { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">피드백은 백분율로 지정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">기본값은 <code>50%</code>입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">유효 값 범위는 <code>-100%</code>에서 <code>100%</code>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiounitdelay/delaytime.md">var delayTime: TimeInterval</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">입력 신호가 출력에 도달하는 데 필요한 시간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiounitdelay/lowpasscutoff.md">var lowPassCutoff: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">고주파 콘텐츠가 감소하기 시작하는 컷오프 주파수(헤르츠)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiounitdelay/wetdrymix.md">var wetDryMix: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">wet와 dry 신호의 블렌드입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiounitdelay/feedback">View on Apple Developer</a>*</span>
