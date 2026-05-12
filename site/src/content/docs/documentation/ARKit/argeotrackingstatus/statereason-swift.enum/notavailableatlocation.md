---
source_path: "documentation/ARKit/argeotrackingstatus/statereason-swift.enum/notavailableatlocation.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/argeotrackingstatus/statereason-swift.enum/notavailableatlocation"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:argeotrackingstatusstatereasonnotavailableatlocation:0000:0001">ARGeoTrackingStatus.StateReason.notAvailableAtLocation</span>

<span class="ko-segment" data-segment-id="seg:paragraph:argeotrackingstatusstatereasonnotavailableatlocation:0001:0001">**Framework**: ARKit **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:argeotrackingstatusstatereasonnotavailableatlocation:0002:0001">현재 위치에서는 지오 트래킹을 제공하지 않습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:argeotrackingstatusstatereasonnotavailableatlocation:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:argeotrackingstatusstatereasonnotavailableatlocation:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:argeotrackingstatusstatereasonnotavailableatlocation:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:argeotrackingstatusstatereasonnotavailableatlocation:0004:0003">Mac Catalyst 14.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case notAvailableAtLocation
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">When you reset scene reconstruction, ARKit removes any existing mesh anchors (<a href="armeshanchor.md">@@TOKEN_0@@</a>) from the session.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">자세한 내용은 <a href="argeotrackingconfiguration/checkavailability(completionhandler:">@@TOKEN_0@@</a>.md)를 참조하세요.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">If <a href="argeotrackingconfiguration/checkavailability(completionhandler:">@@TOKEN_0@@</a>.md) returns <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_1@@</a> and an app begins a geo-tracking session, ARKit provides this state reason when the user has moved to an unsupported area.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="argeotrackingstatus/statereason-swift.enum/none.md">ARGeoTrackingStatus.StateReason.none</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">문제가 보고되지 않았습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="argeotrackingstatus/statereason-swift.enum/needlocationpermissions.md">ARGeoTrackingStatus.StateReason.needLocationPermissions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">이 위치는 지오 트래킹에 대한 사용자 권한이 필요합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="argeotrackingstatus/statereason-swift.enum/devicepointedtoolow.md">ARGeoTrackingStatus.StateReason.devicePointedTooLow</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">기기의 위치가 지오 트래킹하기에는 너무 낮습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="argeotrackingstatus/statereason-swift.enum/worldtrackingunstable.md">ARGeoTrackingStatus.StateReason.worldTrackingUnstable</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">기기의 위치나 동작으로 인해 지오 트래킹이 불안정해집니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="argeotrackingstatus/statereason-swift.enum/waitingforlocation.md">ARGeoTrackingStatus.StateReason.waitingForLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">프레임워크가 사용자의 GPS 위치를 확인하는 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="argeotrackingstatus/statereason-swift.enum/waitingforavailabilitycheck.md">ARGeoTrackingStatus.StateReason.waitingForAvailabilityCheck</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">프레임워크가 사용자의 위치에서 지오 트래킹 가능 여부를 확인하는 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="argeotrackingstatus/statereason-swift.enum/geodatanotloaded.md">ARGeoTrackingStatus.StateReason.geoDataNotLoaded</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">프레임워크가 로컬라이제이션 이미지를 다운로드하는 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="argeotrackingstatus/statereason-swift.enum/visuallocalizationfailed.md">ARGeoTrackingStatus.StateReason.visualLocalizationFailed</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">기기 카메라의 뷰와 로컬라이제이션 이미지가 일치하지 않았습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="argeotrackingstatus/statereason-swift.enum/none.md">ARGeoTrackingStatus.StateReason.none</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">문제가 보고되지 않았습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="argeotrackingstatus/statereason-swift.enum/needlocationpermissions.md">ARGeoTrackingStatus.StateReason.needLocationPermissions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">이 위치는 지오 트래킹에 대한 사용자 권한이 필요합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="argeotrackingstatus/statereason-swift.enum/devicepointedtoolow.md">ARGeoTrackingStatus.StateReason.devicePointedTooLow</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">기기의 위치가 지오 트래킹하기에는 너무 낮습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="argeotrackingstatus/statereason-swift.enum/worldtrackingunstable.md">ARGeoTrackingStatus.StateReason.worldTrackingUnstable</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">기기의 위치나 동작으로 인해 지오 트래킹이 불안정해집니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="argeotrackingstatus/statereason-swift.enum/waitingforlocation.md">ARGeoTrackingStatus.StateReason.waitingForLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">프레임워크가 사용자의 GPS 위치를 확인하는 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="argeotrackingstatus/statereason-swift.enum/waitingforavailabilitycheck.md">ARGeoTrackingStatus.StateReason.waitingForAvailabilityCheck</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">프레임워크가 사용자의 위치에서 지오 트래킹 가능 여부를 확인하는 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="argeotrackingstatus/statereason-swift.enum/geodatanotloaded.md">ARGeoTrackingStatus.StateReason.geoDataNotLoaded</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">프레임워크가 로컬라이제이션 이미지를 다운로드하는 상태입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">*<a href="https://developer.apple.com/documentation/arkit/argeotrackingstatus/statereason-swift.enum/notavailableatlocation">View on Apple Developer</a>*</span>
