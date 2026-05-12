---
source_path: "documentation/AVFoundation/avcaptiondimension.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptiondimension"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcaptiondimension:0000:0001">AVCaptionDimension</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcaptiondimension:0001:0001">**Framework**: AVFoundation **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcaptiondimension:0002:0001">캡션 치수를 정의하는 구조체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcaptiondimension:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcaptiondimension:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcaptiondimension:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcaptiondimension:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcaptiondimension:0004:0004">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct AVCaptionDimension
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:inspecting-the-dimensions:0008:0001">치수 검사</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-the-dimensions:0009:0001"><a href="avcaptiondimension/value.md">var value: CGFloat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-the-dimensions:0010:0001">좌표 또는 길이 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-the-dimensions:0011:0001"><a href="avcaptiondimension/units.md">var units: AVCaptionUnitsType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-the-dimensions:0012:0001">cells 또는 points와 같은 좌표의 단위입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-the-dimensions:0013:0001"><a href="avcaptionunitstype.md">enum AVCaptionUnitsType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-the-dimensions:0014:0001">캡션 형식의 단위를 정의하는 구조체입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0015:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0016:0001"><a href="avcaptiondimension/init.md">init()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0017:0001">캡션 치수를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0018:0001"><a href="avcaptiondimension/init(value:units:">init(value: CGFloat, units: AVCaptionUnitsType)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0019:0001">값과 단위 유형으로 캡션 치수를 생성합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0020:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0021:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0002"><a href="../Swift/Sendable.md">Sendable</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:conforms-to:0024:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptiondimension">View on Apple Developer</a>*</span>
