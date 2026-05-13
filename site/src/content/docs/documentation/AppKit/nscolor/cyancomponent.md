---
source_path: "documentation/AppKit/nscolor/cyancomponent.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nscolor/cyancomponent"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cyancomponent:0000:0001">cyanComponent</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cyancomponent:0001:0001">**Framework**: AppKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cyancomponent:0002:0001">색상의 시안 구성 요소 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cyancomponent:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cyancomponent:0004:0001">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var cyanComponent: CGFloat { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성은 <a href="nscolorspacename/devicecmyk.md">@@TOKEN_0@@</a> 색 공간의 색상에 대해서만 사용해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">다른 색상 유형에 대해 이 속성에 접근하면 예외가 발생합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="nscolor/getcyan(_:magenta:yellow:black:alpha:">func getCyan(UnsafeMutablePointer&lt;CGFloat&gt;?, magenta: UnsafeMutablePointer&lt;CGFloat&gt;?, yellow: UnsafeMutablePointer&lt;CGFloat&gt;?, black: UnsafeMutablePointer&lt;CGFloat&gt;?, alpha: UnsafeMutablePointer&lt;CGFloat&gt;?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">색상 객체의 CMYK 및 불투명도 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="nscolor/alphacomponent.md">var alphaComponent: CGFloat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">색상의 알파(불투명도) 구성 요소 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="nscolor/whitecomponent.md">var whiteComponent: CGFloat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">색상의 백색 구성 요소 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="nscolor/redcomponent.md">var redComponent: CGFloat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">색상의 빨간색 구성 요소 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="nscolor/greencomponent.md">var greenComponent: CGFloat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">색상의 녹색 구성 요소 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="nscolor/bluecomponent.md">var blueComponent: CGFloat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">색상의 파란색 구성 요소 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="nscolor/magentacomponent.md">var magentaComponent: CGFloat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">색상의 마젠타 구성 요소 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="nscolor/yellowcomponent.md">var yellowComponent: CGFloat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">색상의 노란색 구성 요소 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="nscolor/blackcomponent.md">var blackComponent: CGFloat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">색상의 검정 구성 요소 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="nscolor/huecomponent.md">var hueComponent: CGFloat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">색상의 색조 구성 요소 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="nscolor/saturationcomponent.md">var saturationComponent: CGFloat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">The saturation component value of the color.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="nscolor/brightnesscomponent.md">var brightnessComponent: CGFloat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">The brightness component value of the color.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="nscolor/catalognamecomponent.md">var catalogNameComponent: NSColorList.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">The catalog containing the color’s name.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="nscolor/localizedcatalognamecomponent.md">var localizedCatalogNameComponent: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">The localized version of the catalog name containing the color.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="nscolor/colornamecomponent.md">var colorNameComponent: NSColor.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">The name of the color.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="nscolor/localizedcolornamecomponent.md">var localizedColorNameComponent: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">The localized version of the color name.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">*<a href="https://developer.apple.com/documentation/appkit/nscolor/cyancomponent">View on Apple Developer</a>*</span>
