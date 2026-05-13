---
source_path: "documentation/AVFoundation/avcapturedevice/defaultrectforexposurepoint-ofinterest.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/defaultrectforexposurepoint-ofinterest"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:defaultrectforexposurepointofinterest:0000:0001">defaultRectForExposurePoint(ofInterest:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:defaultrectforexposurepointofinterest:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:defaultrectforexposurepointofinterest:0002:0001">주어진 노출 관심점에 사용되는 기본 관심 사각형입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:defaultrectforexposurepointofinterest:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:defaultrectforexposurepointofinterest:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:defaultrectforexposurepointofinterest:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:defaultrectforexposurepointofinterest:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:defaultrectforexposurepointofinterest:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:defaultrectforexposurepointofinterest:0004:0005">tvOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func defaultRectForExposurePoint(ofInterest pointOfInterest: CGPoint) -> CGRect
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">예를 들어 <code>(0.5, 0.5)</code>를 전달하면 기본 노출 관심점이 <code>(0.5, 0.5)</code>일 때 사용되는 노출 관심 사각형을 얻을 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 메서드는 <a href="avcapturedevice/isexposurerectofinterestsupported.md">@@TOKEN_0@@</a>가 <code>false</code>를 반환하면 <code>CGRectNull</code>을 반환합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>pointOfInterest</code>: 기본 관심 사각형을 얻고자 하는 관심점입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcapturedevice/isexposurerectofinterestsupported.md">var isExposureRectOfInterestSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">기기가 노출 관심 사각형을 지원하는지 여부입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcapturedevice/exposurerectofinterest.md">var exposureRectOfInterest: CGRect</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">기기가 가진 경우 현재의 노출 관심 사각형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avcapturedevice/minexposurerectofinterestsize.md">var minExposureRectOfInterestSize: CGSize</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">관심 사각형을 지정할 때 사용할 수 있는 최소 크기입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/defaultrectforexposurepoint(ofinterest:">View on Apple Developer</a>)*</span>
