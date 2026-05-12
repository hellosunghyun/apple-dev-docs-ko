---
source_path: "documentation/AVFoundation/avcaptureslider/localizedvalueformat.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptureslider/localizedvalueformat"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:localizedvalueformat:0000:0001">localizedValueFormat</span>

<span class="ko-segment" data-segment-id="seg:paragraph:localizedvalueformat:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:localizedvalueformat:0002:0001">슬라이더 값의 표시를 정의하는 로컬라이즈 문자열입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:localizedvalueformat:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:localizedvalueformat:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:localizedvalueformat:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:localizedvalueformat:0004:0003">Mac Catalyst 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:localizedvalueformat:0004:0004">macOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:localizedvalueformat:0004:0005">tvOS 18.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var localizedValueFormat: String? { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">슬라이더 값의 표시를 수정하려면 형식 문자열을 지정하세요.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">형식 문자열에는 <code>%@</code>만 사용할 수 있으며 <code>%d</code>, <code>%s</code> 등 다른 자리표시자는 사용할 수 없습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">잘못된 형식 문자열을 설정하면 값의 기본 표시 형식이 사용됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">유효한 형식 문자열 예시는 다음과 같습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0001">예: “%@%”는 “40%”입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0002">예: “%@ fps”는 “60 fps”입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0003">예: “+ %@”는 “+ 20”입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcaptureslider/value.md">var value: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">슬라이더의 현재 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[var prominentValues: [Float]](avcaptureslider/prominentvalues-199dz.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">이 배열의 값은 고유한 시각적 표현 또는 동작을 가질 수 있습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptureslider/localizedvalueformat">View on Apple Developer</a>*</span>
