---
source_path: "documentation/ARKit/argeotrackingstatus/statereason-swift.enum/devicepointedtoolow.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/argeotrackingstatus/statereason-swift.enum/devicepointedtoolow"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:argeotrackingstatusstatereasondevicepointedtoolow:0000:0001">ARGeoTrackingStatus.StateReason.devicePointedTooLow</span>

<span class="ko-segment" data-segment-id="seg:paragraph:argeotrackingstatusstatereasondevicepointedtoolow:0001:0001">**Framework**: ARKit **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:argeotrackingstatusstatereasondevicepointedtoolow:0002:0001">기기 위치가 geotracking에 비해 너무 낮습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:argeotrackingstatusstatereasondevicepointedtoolow:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:argeotrackingstatusstatereasondevicepointedtoolow:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:argeotrackingstatusstatereasondevicepointedtoolow:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:argeotrackingstatusstatereasondevicepointedtoolow:0004:0003">Mac Catalyst 14.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case devicePointedTooLow
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This property returns a value in the range <code>0.0</code> to <code>1.0</code>, with <code>0.0</code> representing the minimum volume, and <code>1.0</code> representing the maximum volume.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 문제를 해결하려면 앱이 사용자에게 기기를 올리라고 안내하고 <a href="argeotrackingstatus/state-swift.enum/localizing#Assisting-the-User-with-Visual-Localization.md">@@TOKEN_0@@</a>의 지침을 따라야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="argeotrackingstatus/statereason-swift.enum/none.md">ARGeoTrackingStatus.StateReason.none</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">문제가 보고되지 않았습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="argeotrackingstatus/statereason-swift.enum/notavailableatlocation.md">ARGeoTrackingStatus.StateReason.notAvailableAtLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">이 위치에서는 geotracking이 제공되지 않습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="argeotrackingstatus/statereason-swift.enum/needlocationpermissions.md">ARGeoTrackingStatus.StateReason.needLocationPermissions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">이 위치에서는 geotracking에 대한 사용자 권한이 필요합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="argeotrackingstatus/statereason-swift.enum/worldtrackingunstable.md">ARGeoTrackingStatus.StateReason.worldTrackingUnstable</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">기기의 위치 또는 동작이 geotracking을 불안정하게 만듭니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="argeotrackingstatus/statereason-swift.enum/waitingforlocation.md">ARGeoTrackingStatus.StateReason.waitingForLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">프레임워크가 사용자의 GPS 위치를 확인하는 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="argeotrackingstatus/statereason-swift.enum/waitingforavailabilitycheck.md">ARGeoTrackingStatus.StateReason.waitingForAvailabilityCheck</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">프레임워크가 사용자의 위치에서 geotracking 가용성을 확인하는 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="argeotrackingstatus/statereason-swift.enum/geodatanotloaded.md">ARGeoTrackingStatus.StateReason.geoDataNotLoaded</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">프레임워크가 로컬라이제이션 이미지를 다운로드하는 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="argeotrackingstatus/statereason-swift.enum/visuallocalizationfailed.md">ARGeoTrackingStatus.StateReason.visualLocalizationFailed</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">로컬라이제이션 이미지가 기기 카메라의 보기와 일치하지 못했습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="argeotrackingstatus/statereason-swift.enum/none.md">ARGeoTrackingStatus.StateReason.none</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">문제가 보고되지 않았습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="argeotrackingstatus/statereason-swift.enum/notavailableatlocation.md">ARGeoTrackingStatus.StateReason.notAvailableAtLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">이 위치에서는 geotracking이 제공되지 않습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="argeotrackingstatus/statereason-swift.enum/needlocationpermissions.md">ARGeoTrackingStatus.StateReason.needLocationPermissions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">이 위치에서는 geotracking에 대한 사용자 권한이 필요합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="argeotrackingstatus/statereason-swift.enum/worldtrackingunstable.md">ARGeoTrackingStatus.StateReason.worldTrackingUnstable</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">기기의 위치 또는 동작이 geotracking을 불안정하게 만듭니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="argeotrackingstatus/statereason-swift.enum/waitingforlocation.md">ARGeoTrackingStatus.StateReason.waitingForLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">프레임워크가 사용자의 GPS 위치를 확인하는 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="argeotrackingstatus/statereason-swift.enum/waitingforavailabilitycheck.md">ARGeoTrackingStatus.StateReason.waitingForAvailabilityCheck</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">프레임워크가 사용자의 위치에서 geotracking 가용성을 확인하는 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="argeotrackingstatus/statereason-swift.enum/geodatanotloaded.md">ARGeoTrackingStatus.StateReason.geoDataNotLoaded</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">프레임워크가 로컬라이제이션 이미지를 다운로드하는 상태입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">*<a href="https://developer.apple.com/documentation/arkit/argeotrackingstatus/statereason-swift.enum/devicepointedtoolow">View on Apple Developer</a>*</span>
