---
source_path: "documentation/AVFoundation/avcapturephotooutputreadinesscoordinator.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturephotooutputreadinesscoordinator"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcapturephotooutputreadinesscoordinator:0000:0001">AVCapturePhotoOutputReadinessCoordinator</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturephotooutputreadinesscoordinator:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturephotooutputreadinesscoordinator:0002:0001">사진 출력의 캡처 준비 상태 변경을 모니터링하는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturephotooutputreadinesscoordinator:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcapturephotooutputreadinesscoordinator:0004:0001">iOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturephotooutputreadinesscoordinator:0004:0002">iPadOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturephotooutputreadinesscoordinator:0004:0003">Mac Catalyst 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturephotooutputreadinesscoordinator:0004:0004">macOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturephotooutputreadinesscoordinator:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVCapturePhotoOutputReadinessCoordinator
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">이 객체를 사용해 메인 큐의 사용자 인터페이스 업데이트를 백그라운드 큐에서 실행되는 <a href="avcapturephotooutput.md">@@TOKEN_0@@</a>와 조정할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002"><a href="avcapturephotooutputreadinesscoordinatordelegate.md">@@TOKEN_0@@</a> 프로토콜을 앱에서 채택하고 구현을 조정기의 delegate 객체로 설정하면, 연결된 사진 출력의 <a href="avcapturephotooutput/capturereadiness-swift.property.md">@@TOKEN_1@@</a> 상태 변경 시 콜백을 받을 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">이 객체의 <a href="avcapturephotooutputreadinesscoordinator/starttrackingcapturerequest(using:">@@TOKEN_0@@</a>.md) 메서드를 호출해 추가 캡처 요청을 추적할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0002">백그라운드 큐에서 사진 출력의 <a href="avcapturephotooutput/capturephoto(with:delegate:">@@TOKEN_0@@</a>.md) 메서드를 비동기로 호출하는 동안, 메인 스레드에서 셔터 버튼의 사용 가능 여부와 모양을 동기적으로 업데이트하는 데 사용할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0010:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-a-coordinator:0011:0001">조정기 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-coordinator:0012:0001"><a href="avcapturephotooutputreadinesscoordinator/init(photooutput:">init(photoOutput: AVCapturePhotoOutput)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-coordinator:0013:0001">백그라운드 큐에서 실행되는 사진 출력과 사용자 인터페이스 변경을 조정하도록 돕는 객체를 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:setting-the-delegate-object:0014:0001">delegate 객체 설정</span>

- <span class="ko-segment" data-segment-id="seg:list:setting-the-delegate-object:0015:0001"><a href="avcapturephotooutputreadinesscoordinator/delegate.md">var delegate: (any AVCapturePhotoOutputReadinessCoordinatorDelegate)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:setting-the-delegate-object:0016:0001">조정기의 delegate 객체입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:performing-tracking-requests:0017:0001">추적 요청 수행</span>

- <span class="ko-segment" data-segment-id="seg:list:performing-tracking-requests:0018:0001"><a href="avcapturephotooutputreadinesscoordinator/starttrackingcapturerequest(using:">func startTrackingCaptureRequest(using: AVCapturePhotoSettings)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:performing-tracking-requests:0019:0001">지정된 사진 설정을 사용하는 캡처 요청을 추적합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:performing-tracking-requests:0020:0001"><a href="avcapturephotooutputreadinesscoordinator/stoptrackingcapturerequest(using:">func stopTrackingCaptureRequest(using: Int64)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:performing-tracking-requests:0021:0001">지정된 사진 설정의 고유 식별자에 해당하는 캡처 요청 추적을 중지합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:determining-readiness-for-capture:0022:0001">캡처 준비 상태 판정</span>

- <span class="ko-segment" data-segment-id="seg:list:determining-readiness-for-capture:0023:0001"><a href="avcapturephotooutputreadinesscoordinator/capturereadiness.md">var captureReadiness: AVCapturePhotoOutput.CaptureReadiness</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:determining-readiness-for-capture:0024:0001">조정기의 사진 출력이 새로운 캡처 요청에 시의적절하게 응답할 수 있는지 여부를 나타내는 값입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0025:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0026:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0027:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0028:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0029:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0029:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0029:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0029:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0029:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0029:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0030:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="capturing-consistent-color-images.md">Capturing consistent color images</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">새 Constant Color API를 사용해 앱에 촬영 스튜디오와 조명 장비의 효과를 추가할 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="capturing-still-and-live-photos.md">Capturing still and Live Photos</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">정지 이미지, Live Photos 및 기타 사진 형식의 단일 또는 다중 이미지를 구성하고 캡처합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="capturing-photos-in-raw-and-apple-proraw-formats.md">Capturing photos in RAW and Apple ProRAW formats</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">카메라 앱에서 최소 처리된 이미지 캡처를 사용하도록 하여 전문가용 촬영 워크플로우를 지원합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="../AppKit/supporting-continuity-camera-in-your-mac-app.md">Supporting Continuity Camera in Your Mac App</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">Continuity Camera를 사용해 사용자의 iPhone, iPad 또는 iPod touch에서 스캔한 문서와 사진을 Mac 앱에 통합합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="avcapturephoto.md">class AVCapturePhoto</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">사진 캡처 출력의 이미지 데이터를 담는 컨테이너입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="avcapturedeferredphotoproxy.md">class AVCaptureDeferredPhotoProxy</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">시스템이 나중에 고해상도 자산을 처리하고 가져오는 데 사용할 수 있는 가벼운 처리의 사진 데이터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0043:0001"><a href="avcapturephotooutput.md">class AVCapturePhotoOutput</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">정지 이미지, Live Photos 및 기타 사진 촬영 워크플로우를 위한 캡처 출력입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0045:0001"><a href="avcapturephotocapturedelegate.md">protocol AVCapturePhotoCaptureDelegate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0046:0001">사진 캡처 출력의 진행 상황을 모니터링하고 결과를 수신하는 방법입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0047:0001"><a href="avcapturephotooutputreadinesscoordinatordelegate.md">protocol AVCapturePhotoOutputReadinessCoordinatorDelegate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0048:0001">사진 출력의 캡처 준비 상태 업데이트를 수신하는 위임 프로토콜입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0049:0001"><a href="avcapturestillimageoutput.md">class AVCaptureStillImageOutput</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0050:0001">정지 사진 캡처를 위한 캡처 출력입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0052:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturephotooutputreadinesscoordinator">View on Apple Developer</a>*</span>
