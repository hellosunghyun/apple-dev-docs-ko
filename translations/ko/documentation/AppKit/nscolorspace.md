---
source_path: "documentation/AppKit/nscolorspace.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nscolorspace"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:nscolorspace:0000:0001">NSColorSpace</span>

<span class="ko-segment" data-segment-id="seg:paragraph:nscolorspace:0001:0001">**Framework**: AppKit **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:nscolorspace:0002:0001">사용자 지정 색상 공간을 나타내는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:nscolorspace:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:nscolorspace:0004:0001">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class NSColorSpace
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">ColorSync 프로필이나 ICC 프로필을 사용해 사용자 지정 색상 공간을 만들 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002"><a href="nscolorspace.md">@@TOKEN_0@@</a>에는 시스템 색상 공간을 나타내는 객체를 반환하는 팩토리 메서드도 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001"><a href="nscolor.md">@@TOKEN_0@@</a> 클래스의 <a href="nscolor/init(colorspace:components:count:">@@TOKEN_1@@</a>.md) 메서드를 사용하면 사용자 지정 <a href="nscolorspace.md">@@TOKEN_2@@</a> 객체를 기반으로 색상 객체를 생성할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0002"><a href="nscolor.md">@@TOKEN_0@@</a> 객체에 <a href="nscolor/usingcolorspace(_:">@@TOKEN_1@@</a>.md) 메시지를 보내면 두 개의 색상 공간(둘 다 사용자 지정 색상 공간일 수 있음) 사이를 변환할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0010:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-a-named-color-space:0011:0001">이름으로 지정된 색상 공간 가져오기</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-a-named-color-space:0012:0001"><a href="nscolorspace/devicergb.md">class var deviceRGB: NSColorSpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-a-named-color-space:0013:0001">보정되었거나 장치 종속 RGB 색상 공간을 나타내는 색상 공간 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-a-named-color-space:0014:0001"><a href="nscolorspace/genericrgb.md">class var genericRGB: NSColorSpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-a-named-color-space:0015:0001">장치 독립적인 RGB 색상 공간을 나타내는 색상 공간 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-a-named-color-space:0016:0001"><a href="nscolorspace/devicecmyk.md">class var deviceCMYK: NSColorSpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-a-named-color-space:0017:0001">보정된 또는 장치 종속 CMYK 색 공간을 나타내는 색 공간 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-a-named-color-space:0018:0001"><a href="nscolorspace/genericcmyk.md">class var genericCMYK: NSColorSpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-a-named-color-space:0019:0001">기기 독립 CMYK 색 공간을 나타내는 색 공간 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-a-named-color-space:0020:0001"><a href="nscolorspace/devicegray.md">class var deviceGray: NSColorSpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-a-named-color-space:0021:0001">보정된 또는 장치 종속 회색 색 공간을 나타내는 색 공간 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-a-named-color-space:0022:0001"><a href="nscolorspace/genericgray.md">class var genericGray: NSColorSpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-a-named-color-space:0023:0001">기기 독립 회색 색 공간을 나타내는 색 공간 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-a-named-color-space:0024:0001"><a href="nscolorspace/srgb.md">class var sRGB: NSColorSpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-a-named-color-space:0025:0001">sRGB 색 공간을 나타내는 색 공간 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-a-named-color-space:0026:0001"><a href="nscolorspace/extendedsrgb.md">class var extendedSRGB: NSColorSpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-a-named-color-space:0027:0001">확장 sRGB 색 공간을 나타내는 색 공간 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-a-named-color-space:0028:0001"><a href="nscolorspace/displayp3.md">class var displayP3: NSColorSpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-a-named-color-space:0029:0001">P3 Display 색 공간을 나타내는 색 공간 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-a-named-color-space:0030:0001"><a href="nscolorspace/genericgamma22gray.md">class var genericGamma22Gray: NSColorSpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-a-named-color-space:0031:0001">감마 값이 2.2인 회색 색 공간을 나타내는 색 공간 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-a-named-color-space:0032:0001"><a href="nscolorspace/extendedgenericgamma22gray.md">class var extendedGenericGamma22Gray: NSColorSpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-a-named-color-space:0033:0001">감마 값이 2.2인 확장 회색 색 공간을 나타내는 색 공간 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-a-named-color-space:0034:0001"><a href="nscolorspace/adobergb1998.md">class var adobeRGB1998: NSColorSpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-a-named-color-space:0035:0001">Adobe RGB (1998) 색 공간을 나타내는 색 공간 객체입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-the-color-spaces-available-on-the-system:0036:0001">시스템에서 사용 가능한 색 공간 가져오기</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-the-color-spaces-available-on-the-system:0037:0001">[class func availableColorSpaces(with: NSColorSpace.Model) -&gt; [NSColorSpace]](nscolorspace/availablecolorspaces(with:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-the-color-spaces-available-on-the-system:0038:0001">색상 패널에 표시되는 시스템의 사용 가능한 색 공간 목록을 색상 패널 표시 순서대로 반환합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializing-a-custom-color-space-object:0039:0001">사용자 지정 색 공간 객체 초기화</span>

- <span class="ko-segment" data-segment-id="seg:list:initializing-a-custom-color-space-object:0040:0001"><a href="nscolorspace/init(cgcolorspace:">init?(cgColorSpace: CGColorSpace)</a>-889nv.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializing-a-custom-color-space-object:0041:0001">Core Graphics 색 공간 객체에서 초기화된 색 공간 객체를 생성하고 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializing-a-custom-color-space-object:0042:0001"><a href="nscolorspace/init(colorsyncprofile:">init?(colorSyncProfile: UnsafeMutableRawPointer)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializing-a-custom-color-space-object:0043:0001">지정된 ColorSync 프로필에서 색 공간 객체를 초기화하고 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializing-a-custom-color-space-object:0044:0001"><a href="nscolorspace/init(iccprofiledata:">init?(iccProfileData: Data)</a>-8rl9d.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializing-a-custom-color-space-object:0045:0001">지정된 ICC 프로필에서 색 공간 객체를 초기화하고 반환합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-color-space-data-and-attributes:0046:0001">색 공간 데이터 및 속성에 접근하기</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-color-space-data-and-attributes:0047:0001"><a href="nscolorspace/cgcolorspace.md">var cgColorSpace: CGColorSpace?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-color-space-data-and-attributes:0048:0001">색 공간과 동등한 Core Graphics 색 공간 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-color-space-data-and-attributes:0049:0001"><a href="nscolorspace/colorspacemodel.md">var colorSpaceModel: NSColorSpace.Model</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-color-space-data-and-attributes:0050:0001">색 공간이 기반으로 하는 모델입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-color-space-data-and-attributes:0051:0001"><a href="nscolorspace/model.md">NSColorSpace.Model</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-color-space-data-and-attributes:0052:0001">색 공간 객체가 기반으로 하는 추상 모델을 설명하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-color-space-data-and-attributes:0053:0001"><a href="nscolorspace/colorsyncprofile.md">var colorSyncProfile: UnsafeMutableRawPointer?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-color-space-data-and-attributes:0054:0001">색 공간이 생성된 ColorSync 프로필입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-color-space-data-and-attributes:0055:0001"><a href="nscolorspace/iccprofiledata.md">var iccProfileData: Data?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-color-space-data-and-attributes:0056:0001">색 공간이 생성된 ICC 프로필 데이터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-color-space-data-and-attributes:0057:0001"><a href="nscolorspace/localizedname.md">var localizedName: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-color-space-data-and-attributes:0058:0001">색 공간의 로컬라이즈된 이름입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-color-space-data-and-attributes:0059:0001"><a href="nscolorspace/numberofcolorcomponents.md">var numberOfColorComponents: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-color-space-data-and-attributes:0060:0001">색 공간이 알파를 제외하고 지원하는 구성요소 수입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0061:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0062:0001"><a href="nscolorspace/init(cgcolorspace:">init?(CGColorSpace: CGColorSpace)</a>-90qpy.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:initializers:0062:0002"><a href="nscolorspace/init(iccprofiledata:">init?(ICCProfileData: Data)</a>-jhas.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:initializers:0062:0003"><a href="nscolorspace/init(coder:">init?(coder: NSCoder)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0063:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0064:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0065:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0066:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0067:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0067:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0067:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0067:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0067:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0067:0006"><a href="../Foundation/NSCoding.md">NSCoding</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0067:0007"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0067:0008"><a href="../Foundation/NSSecureCoding.md">NSSecureCoding</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0067:0009"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0067:0010"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0068:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0069:0001"><a href="nscolor.md">class NSColor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0070:0001">색상 데이터와 경우에 따라 불투명도(알파 값)를 저장하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0071:0001"><a href="nscolorlist.md">class NSColorList</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0072:0001">키로 식별되는 색상 객체의 순서가 지정된 목록입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0074:0001">*<a href="https://developer.apple.com/documentation/appkit/nscolorspace">View on Apple Developer</a>*</span>
