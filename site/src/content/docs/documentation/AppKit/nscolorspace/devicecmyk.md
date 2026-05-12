---
source_path: "documentation/AppKit/nscolorspace/devicecmyk.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nscolorspace/devicecmyk"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:devicecmyk:0000:0001">deviceCMYK</span>

<span class="ko-segment" data-segment-id="seg:paragraph:devicecmyk:0001:0001">**Framework**: AppKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:devicecmyk:0002:0001">보정되었거나 장치 종속 CMYK 색 공간을 나타내는 색 공간 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:devicecmyk:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:devicecmyk:0004:0001">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class var deviceCMYK: NSColorSpace { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><code>NSColorSpace</code> 객체입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0002">이 색 공간에는 <code>cyan</code>, <code>magenta</code>, <code>yellow</code>, <code>black</code>, <code>alpha</code> 구성 요소가 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0003">색상 감산형 CMYK 색 공간을 사용하는 대표적인 장치는 컬러 프린터입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0004">이 객체는 Cocoa 색상 공간 이름 <code>NSDeviceCMYKColorSpace</code>에 해당합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="nscolorspace/devicergb.md">class var deviceRGB: NSColorSpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">보정되었거나 장치 종속 RGB 색 공간을 나타내는 색 공간 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="nscolorspace/genericrgb.md">class var genericRGB: NSColorSpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">장치 독립형 RGB 색 공간을 나타내는 색 공간 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="nscolorspace/genericcmyk.md">class var genericCMYK: NSColorSpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">장치 독립형 CMYK 색 공간을 나타내는 색 공간 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="nscolorspace/devicegray.md">class var deviceGray: NSColorSpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/appkit/nscontroltexteditingdelegate/controltextdidbeginediting(_:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="nscolorspace/genericgray.md">class var genericGray: NSColorSpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">장치 독립형 그레이 스케일 색 공간을 나타내는 색 공간 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="nscolorspace/srgb.md">class var sRGB: NSColorSpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">sRGB 색 공간을 나타내는 색 공간 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="nscolorspace/extendedsrgb.md">class var extendedSRGB: NSColorSpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">확장된 sRGB 색 공간을 나타내는 색 공간 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="nscolorspace/displayp3.md">class var displayP3: NSColorSpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">P3 Display 색 공간을 나타내는 색 공간 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="nscolorspace/genericgamma22gray.md">class var genericGamma22Gray: NSColorSpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">감마 값이 2.2인 그레이 스케일 색 공간을 나타내는 색 공간 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="nscolorspace/extendedgenericgamma22gray.md">class var extendedGenericGamma22Gray: NSColorSpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">감마 값이 2.2인 확장된 그레이 스케일 색 공간을 나타내는 색 공간 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="nscolorspace/adobergb1998.md">class var adobeRGB1998: NSColorSpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Adobe RGB (1998) 색 공간을 나타내는 색 공간 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">*<a href="https://developer.apple.com/documentation/appkit/nscolorspace/devicecmyk">View on Apple Developer</a>*</span>
