---
source_path: "documentation/AVFAudio/avaudiounitvarispeed/rate.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiounitvarispeed/rate"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:rate:0000:0001">rate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rate:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rate:0002:0001">오디오 재생률입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:rate:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rate:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rate:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:rate:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:rate:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rate:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var rate: Float { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">You may set the value of a capture device’s <a href="avcapturedevice/activeformat.md">@@TOKEN_0@@</a> in two ways:</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">If you set the value of this property to <code>nil</code>, the output vends samples in their device native format.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">마찬가지로 <code>0.5</code>로 변경하면 출력 오디오가 한 옥타브 낮게 재생됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 오디오 유닛은 음악적 간격을 측정할 때 사용하는 로그 값인 *cents* 단위로 피치를 측정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">한 옥타브는 1200 cents와 같습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">한 음악적 반음은 100 cents와 같습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001"><code>rate</code> 값을 사용하면 다음 수식으로 피치(cent)를 계산합니다. <code>pitch = 1200.0 * log2(rate)</code>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">Auto exposure defaults include <a href="avframeraterange/minframerate.md">@@TOKEN_0@@</a>, <a href="avframeraterange/maxframerate.md">@@TOKEN_1@@</a>, and <a href="avcapturedevice/format/maxexposureduration.md">@@TOKEN_2@@</a>.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">기본값은 <code>1.0</code>입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">값의 범위는 <code>0.25</code>에서 <code>4.0</code>입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiounitvarispeed/rate">View on Apple Developer</a>*</span>
