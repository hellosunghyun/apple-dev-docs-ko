---
source_path: "documentation/ARKit/argeotrackingstatus/statereason-swift.enum/geodatanotloaded.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/argeotrackingstatus/statereason-swift.enum/geodatanotloaded"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:argeotrackingstatusstatereasongeodatanotloaded:0000:0001">ARGeoTrackingStatus.StateReason.geoDataNotLoaded</span>

<span class="ko-segment" data-segment-id="seg:paragraph:argeotrackingstatusstatereasongeodatanotloaded:0001:0001">**Framework**: ARKit **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:argeotrackingstatusstatereasongeodatanotloaded:0002:0001">프레임워크가 위치 정합 이미지를 다운로드하는 상태입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:argeotrackingstatusstatereasongeodatanotloaded:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:argeotrackingstatusstatereasongeodatanotloaded:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:argeotrackingstatusstatereasongeodatanotloaded:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:argeotrackingstatusstatereasongeodatanotloaded:0004:0003">Mac Catalyst 14.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case geoDataNotLoaded
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">ARKit는 세션이 위치 정합 이미지를 적극적으로 다운로드하려고 할 때 <a href="argeotrackingstatus/state-swift.enum/localizing.md">@@TOKEN_0@@</a> 상태에서 이 이유를 제공합니다(참조: <a href="argeotrackingconfiguration#Refine-the-users-position-with-imagery.md">@@TOKEN_1@@</a>).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 상태가 너무 오래 지속되면 네트워크 문제가 있을 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">이 상태 사유가 일정 시간 이상 지속되면 앱은 사용자가 인터넷 연결을 확인하도록 요청하는 것을 고려할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="argeotrackingstatus/statereason-swift.enum/none.md">ARGeoTrackingStatus.StateReason.none</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">보고된 문제가 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="argeotrackingstatus/statereason-swift.enum/notavailableatlocation.md">ARGeoTrackingStatus.StateReason.notAvailableAtLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">이 위치는 지오트래킹을 제공하지 않습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="argeotrackingstatus/statereason-swift.enum/needlocationpermissions.md">ARGeoTrackingStatus.StateReason.needLocationPermissions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">이 위치는 지오트래킹을 위해 사용자 권한이 필요합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="argeotrackingstatus/statereason-swift.enum/devicepointedtoolow.md">ARGeoTrackingStatus.StateReason.devicePointedTooLow</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">기기의 자세가 지오트래킹에 적합할 만큼 높지 않습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="argeotrackingstatus/statereason-swift.enum/worldtrackingunstable.md">ARGeoTrackingStatus.StateReason.worldTrackingUnstable</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">기기의 위치 또는 동작으로 인해 지오트래킹이 불안정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="argeotrackingstatus/statereason-swift.enum/waitingforlocation.md">ARGeoTrackingStatus.StateReason.waitingForLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">프레임워크가 사용자의 GPS 위치를 확인하는 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="argeotrackingstatus/statereason-swift.enum/waitingforavailabilitycheck.md">ARGeoTrackingStatus.StateReason.waitingForAvailabilityCheck</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">프레임워크가 사용자 위치에서 지오트래킹 가용성을 확인하는 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="argeotrackingstatus/statereason-swift.enum/visuallocalizationfailed.md">ARGeoTrackingStatus.StateReason.visualLocalizationFailed</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">기기 카메라의 뷰와 위치 정합 이미지가 일치하지 않습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="argeotrackingstatus/statereason-swift.enum/none.md">ARGeoTrackingStatus.StateReason.none</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">보고된 문제가 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="argeotrackingstatus/statereason-swift.enum/notavailableatlocation.md">ARGeoTrackingStatus.StateReason.notAvailableAtLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">이 위치는 지오트래킹을 제공하지 않습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="argeotrackingstatus/statereason-swift.enum/needlocationpermissions.md">ARGeoTrackingStatus.StateReason.needLocationPermissions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">이 위치는 지오트래킹을 위해 사용자 권한이 필요합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="argeotrackingstatus/statereason-swift.enum/devicepointedtoolow.md">ARGeoTrackingStatus.StateReason.devicePointedTooLow</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">기기의 자세가 지오트래킹에 적합할 만큼 높지 않습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="argeotrackingstatus/statereason-swift.enum/worldtrackingunstable.md">ARGeoTrackingStatus.StateReason.worldTrackingUnstable</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">기기의 위치 또는 동작으로 인해 지오트래킹이 불안정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="argeotrackingstatus/statereason-swift.enum/waitingforlocation.md">ARGeoTrackingStatus.StateReason.waitingForLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">프레임워크가 사용자의 GPS 위치를 확인하는 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="argeotrackingstatus/statereason-swift.enum/waitingforavailabilitycheck.md">ARGeoTrackingStatus.StateReason.waitingForAvailabilityCheck</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">프레임워크가 사용자의 위치에서 지오트래킹 가용성을 확인하는 상태입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">*<a href="https://developer.apple.com/documentation/arkit/argeotrackingstatus/statereason-swift.enum/geodatanotloaded">View on Apple Developer</a>*</span>
