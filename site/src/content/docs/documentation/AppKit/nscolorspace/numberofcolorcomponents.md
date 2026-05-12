---
source_path: "documentation/AppKit/nscolorspace/numberofcolorcomponents.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nscolorspace/numberofcolorcomponents"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:numberofcolorcomponents:0000:0001">numberOfColorComponents</span>

<span class="ko-segment" data-segment-id="seg:paragraph:numberofcolorcomponents:0001:0001">**Framework**: AppKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:numberofcolorcomponents:0002:0001">색 공간이 알파를 제외하고 지원하는 구성 요소 수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:numberofcolorcomponents:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:numberofcolorcomponents:0004:0001">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var numberOfColorComponents: Int { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">If the main thread is blocked by an invocation of <a href="nsdocument/performactivity(withsynchronouswaiting:using:">@@TOKEN_0@@</a>.md) or <a href="nsdocument/performsynchronousfileaccess(_:">@@TOKEN_1@@</a>.md), this method interrupts that blocking activity, performs the specified <code>block</code>, and then resumes the blocking activity after <code>block</code> returns.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="nscolorspace/cgcolorspace.md">var cgColorSpace: CGColorSpace?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">해당 색 공간과 동등한 Core Graphics 색 공간 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="nscolorspace/colorspacemodel.md">var colorSpaceModel: NSColorSpace.Model</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">색 공간이 기반하는 모델입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="nscolorspace/model.md">NSColorSpace.Model</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">색 공간 객체가 기반하는 추상 모델을 설명하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="nscolorspace/colorsyncprofile.md">var colorSyncProfile: UnsafeMutableRawPointer?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/appkit/nscontroltexteditingdelegate/controltextdidbeginediting(_:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="nscolorspace/iccprofiledata.md">var iccProfileData: Data?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">색 공간 생성에 사용된 ICC 프로필 데이터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="nscolorspace/localizedname.md">var localizedName: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">색 공간의 지역화된 이름입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/appkit/nscolorspace/numberofcolorcomponents">View on Apple Developer</a>*</span>
