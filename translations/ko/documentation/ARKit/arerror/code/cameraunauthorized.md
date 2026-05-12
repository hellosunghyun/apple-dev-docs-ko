---
source_path: "documentation/ARKit/arerror/code/cameraunauthorized.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arerror/code/cameraunauthorized"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:arerrorcodecameraunauthorized:0000:0001">ARError.Code.cameraUnauthorized</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arerrorcodecameraunauthorized:0001:0001">**Framework**: ARKit **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arerrorcodecameraunauthorized:0002:0001">앱에서 카메라에 대한 사용자 권한이 없음을 나타내는 오류입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arerrorcodecameraunauthorized:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:arerrorcodecameraunauthorized:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:arerrorcodecameraunauthorized:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:arerrorcodecameraunauthorized:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case cameraUnauthorized
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">ARKit provides this reason in state <a href="argeotrackingstatus/state-swift.enum/localizing.md">@@TOKEN_0@@</a> when the session is actively attempting to download localization imagery (see <a href="argeotrackingconfiguration#Refine-the-users-position-with-imagery.md">@@TOKEN_1@@</a>).</span>

- <span class="ko-segment" data-segment-id="seg:list:discussion:0009:0001">앱의 Info.plist 파일에는 <a href="https://developer.apple.comhttps://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/plist/info/NSCameraUsageDescription">@@TOKEN_0@@</a> 키에 대한 메시지가 있어야 합니다. 이 키가 누락되면 AR 세션을 실행하려는 모든 시도가 이 오류로 실패합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0009:0002">앱이 처음으로 AR 세션을 실행하거나 카메라를 사용할 때, iOS는 카메라 사용 설명 메시지가 있는 경고를 자동으로 표시하고 사용자가 앱에 카메라 권한을 부여하도록 요청합니다. 사용자가 이 요청을 허용하면 세션이 시작되며, 그렇지 않으면 세션이 이 오류로 실패합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0009:0003">사용자가 이전에 앱의 카메라 권한을 거부한 경우, AR 세션 실행 또는 카메라 사용 시도는 모두 이 오류로 실패합니다. 카메라 권한을 부여하려면 사용자가 iOS 설정 앱의 Privacy &gt; Camera에서 앱을 명시적으로 활성화해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="arerror/code/requestfailed.md">ARError.Code.requestFailed</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">요청이 실패했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="arerror/code/fileiofailed.md">ARError.Code.fileIOFailed</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">파일 액세스에서 읽기 또는 쓰기 실패를 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="arerror/code/insufficientfeatures.md">ARError.Code.insufficientFeatures</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">작업을 완료하려면 프레임워크에 더 많은 기능이 필요함을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="arerror/code/invalidcollaborationdata.md">ARError.Code.invalidCollaborationData</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">프레임워크가 앱이 네트워크로 수신한 협업 데이터를 파싱하지 못했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="arerror/code/invalidconfiguration.md">ARError.Code.invalidConfiguration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">구성에 모호하거나 잘못된 데이터가 포함되어 있음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="arerror/code/invalidreferenceimage.md">ARError.Code.invalidReferenceImage</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">프레임워크가 참조 이미지를 처리하지 못했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="arerror/code/invalidreferenceobject.md">ARError.Code.invalidReferenceObject</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">프레임워크가 참조 객체를 처리하지 못했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="arerror/code/invalidworldmap.md">ARError.Code.invalidWorldMap</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">프레임워크가 월드맵을 처리하지 못했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="arerror/code/microphoneunauthorized.md">ARError.Code.microphoneUnauthorized</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">앱에서 마이크에 대한 사용자 권한이 없음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="arerror/code/objectmergefailed.md">ARError.Code.objectMergeFailed</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">프레임워크가 감지된 객체를 병합하지 못했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="arerror/code/sensorfailed.md">ARError.Code.sensorFailed</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">요구되는 입력을 센서가 제공하지 못했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="arerror/code/sensorunavailable.md">ARError.Code.sensorUnavailable</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">필수 센서에 프레임워크가 액세스하지 못했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="arerror/code/unsupportedconfiguration.md">ARError.Code.unsupportedConfiguration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">기기가 세션의 구성을 지원하지 않음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="arerror/code/worldtrackingfailed.md">ARError.Code.worldTrackingFailed</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">월드 추적에서 복구할 수 없는 문제가 발생했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="arerror/code/geotrackingfailed.md">ARError.Code.geoTrackingFailed</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">위치 정합 이미지를 기기 카메라 캡처와 매칭하지 못했음을 나타내는 오류입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">*<a href="https://developer.apple.com/documentation/arkit/arerror/code/cameraunauthorized">View on Apple Developer</a>*</span>
