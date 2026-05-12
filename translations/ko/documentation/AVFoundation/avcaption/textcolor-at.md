---
source_path: "documentation/AVFoundation/avcaption/textcolor-at.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaption/textcolor-at"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:textcolorat:0000:0001">textColor(at:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:textcolorat:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:textcolorat:0002:0001">지정한 인덱스 위치의 텍스트 색상을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:textcolorat:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:textcolorat:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:textcolorat:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:textcolorat:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:textcolorat:0004:0004">macOS 12.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@nonobjc
func textColor(at index: String.Index) -> (CGColor?, Range<String.Index>)
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">텍스트 색상과 적용 범위를 포함하는 튜플입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>index</code>: 캡션 텍스트의 문자 위치입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">관련 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="averror-swift.struct/airplayreceiverrequiresinternet.md">func backgroundColor(at: String.Index) -&gt; (CGColor?, Range&lt;String.Index&gt;)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정한 인덱스 위치에서 배경 색상을 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaption/textcolor(at:">View on Apple Developer</a>)*</span>
