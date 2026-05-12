---
source_path: "documentation/AVFoundation/avcaption/fontweight-at.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaption/fontweight-at"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:fontweightat:0000:0001">fontWeight(at:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:fontweightat:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:fontweightat:0002:0001">인덱스 위치의 글꼴 가중치와 범위를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:fontweightat:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:fontweightat:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:fontweightat:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:fontweightat:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:fontweightat:0004:0004">macOS 12.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@nonobjc
func fontWeight(at index: String.Index) -> (AVCaption.FontWeight, Range<String.Index>)
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">해당 글꼴 가중치와 적용 범위를 포함하는 튜플입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>index</code>: 캡션 텍스트의 문자 위치입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturephoto/embeddedthumbnailphotoformat.md">func fontStyle(at: String.Index) -&gt; (AVCaption.FontStyle, Range&lt;String.Index&gt;)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">인덱스 위치의 글꼴 스타일과 범위를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcaption/fontstyle.md">AVCaption.FontStyle</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptionregion/isequal(_:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcaption/fontweight.md">AVCaption.FontWeight</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">캡션의 글꼴 가중치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcaption/decoration(at:">func decoration(at: String.Index) -&gt; (AVCaption.Decoration, Range&lt;String.Index&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">인덱스 위치의 텍스트 장식을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcaption/decoration.md">AVCaption.Decoration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">캡션 텍스트의 텍스트 장식입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaption/fontweight(at:">View on Apple Developer</a>)*</span>
