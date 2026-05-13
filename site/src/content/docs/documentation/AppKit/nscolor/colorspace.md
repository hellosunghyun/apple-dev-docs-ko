---
source_path: "documentation/AppKit/nscolor/colorspace.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nscolor/colorspace"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:colorspace:0000:0001">colorSpace</span>

<span class="ko-segment" data-segment-id="seg:paragraph:colorspace:0001:0001">**Framework**: AppKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:colorspace:0002:0001">색상과 연결된 색상 공간입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:colorspace:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:colorspace:0004:0001">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var colorSpace: NSColorSpace { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성은 이름으로 생성되었거나 패턴 이미지를 사용해 생성한 색상을 제외하고, 연관된 색상 공간이 있는 색상에서만 접근해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">다른 색상 유형에 대해 이 속성에 접근하면 예외가 발생합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">색상 객체가 확실하지 않으면 이 메서드를 호출하기 전에 동등한 <a href="nscolorspace.md">@@TOKEN_0@@</a> 기반 객체로 변환하십시오.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001"><a href="nscolorspacename/calibratedwhite.md">@@TOKEN_0@@</a>, <a href="nscalibratedblackcolorspace.md">@@TOKEN_1@@</a>, <a href="nscolorspacename/calibratedrgb.md">@@TOKEN_2@@</a>, <a href="nscolorspacename/devicewhite.md">@@TOKEN_3@@</a>, <a href="nsdeviceblackcolorspace.md">@@TOKEN_4@@</a>, <a href="nscolorspacename/devicergb.md">@@TOKEN_5@@</a>, <a href="nscolorspacename/devicecmyk.md">@@TOKEN_6@@</a>, <a href="nscolorspacename/custom.md">@@TOKEN_7@@</a> 이름을 사용해 생성하거나 이 이름들에 해당하는 <a href="nscolorspace.md">@@TOKEN_8@@</a> 클래스 메서드로 생성한 색상 객체의 경우 이 속성에 안전하게 접근할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="nscolor/getcomponents(_:">func getComponents(UnsafeMutablePointer&lt;CGFloat&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">색상의 구성요소를 배열로 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="nscolor/numberofcomponents.md">var numberOfComponents: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">색상의 구성요소 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="nscolor/type.md">var type: NSColor.ColorType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">색상 객체의 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="nscolor/usingtype(_:">func usingType(NSColor.ColorType) -&gt; NSColor?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">지정한 색상 유형과 호환되는 색상 객체 버전을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="nscolor/colortype.md">NSColor.ColorType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">색상의 유형을 나타내고 색상 객체에서 호출 가능한 메서드를 결정하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="nscolorspacename.md">struct NSColorSpaceName</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">색상 공간 이름을 지정하는 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">*<a href="https://developer.apple.com/documentation/appkit/nscolor/colorspace">View on Apple Developer</a>*</span>
