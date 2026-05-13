---
source_path: "documentation/AVFoundation/avcaption/fontstyle.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaption/fontstyle"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcaptionfontstyle:0000:0001">AVCaption.FontStyle</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcaptionfontstyle:0001:0001">**Framework**: AVFoundation **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcaptionfontstyle:0002:0001">캡션 텍스트의 글꼴 스타일입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcaptionfontstyle:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcaptionfontstyle:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcaptionfontstyle:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcaptionfontstyle:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcaptionfontstyle:0004:0004">macOS 12.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
enum FontStyle
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:font-styles:0008:0001">글꼴 스타일</span>

- <span class="ko-segment" data-segment-id="seg:list:font-styles:0009:0001"><a href="avcaption/fontstyle/unknown.md">AVCaption.FontStyle.unknown</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:font-styles:0010:0001">알 수 없는 글꼴 스타일입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:font-styles:0011:0001"><a href="avcaption/fontstyle/normal.md">AVCaption.FontStyle.normal</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:font-styles:0012:0001">일반 글꼴 스타일입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:font-styles:0013:0001"><a href="avcaption/fontstyle/italic.md">AVCaption.FontStyle.italic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:font-styles:0014:0001">이탤릭 글꼴 스타일입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0015:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0016:0001"><a href="avcaption/fontstyle/init(rawvalue:">init?(rawValue: Int)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0017:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0018:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0003"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0004"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0005"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0006"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0020:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avcaption/fontstyle(at:">func fontStyle(at: String.Index) -&gt; (AVCaption.FontStyle, Range&lt;String.Index&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">지정한 인덱스 위치의 글꼴 스타일과 범위를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avcaption/fontweight(at:">func fontWeight(at: String.Index) -&gt; (AVCaption.FontWeight, Range&lt;String.Index&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">지정한 인덱스 위치의 글꼴 굵기와 범위를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avcaption/fontweight.md">AVCaption.FontWeight</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">캡션의 글꼴 굵기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avcaption/decoration(at:">func decoration(at: String.Index) -&gt; (AVCaption.Decoration, Range&lt;String.Index&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">지정한 인덱스 위치의 텍스트 장식을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="avcaption/decoration.md">AVCaption.Decoration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">캡션 텍스트의 텍스트 장식입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaption/fontstyle">View on Apple Developer</a>*</span>
