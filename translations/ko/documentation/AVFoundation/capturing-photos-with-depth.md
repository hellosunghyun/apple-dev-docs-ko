---
source_path: "documentation/AVFoundation/capturing-photos-with-depth.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/capturing-photos-with-depth"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:capturing-photos-with-depth:0000:0001">깊이 사진 촬영</span>

<span class="ko-segment" data-segment-id="seg:paragraph:capturing-photos-with-depth:0001:0001">**프레임워크**: AVFoundation</span>

<span class="ko-segment" data-segment-id="seg:paragraph:capturing-photos-with-depth:0002:0001">사진에 깊이 맵을 적용하면 시스템 카메라의 Portrait 모드와 같은 효과를 만들 수 있습니다(지원되는 기기).</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0003:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0001">후면 듀얼 카메라 또는 전면 TrueDepth 카메라가 있는 iOS 기기에서는 캡처 시스템이 깊이 정보를 기록할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0002">깊이 맵은 이미지와 유사하지만, 각 픽셀이 색상을 제공하는 대신 카메라에서 해당 이미지 지점까지의 거리를 나타냅니다(절대값이거나 깊이 맵 내 다른 픽셀에 대한 상대값).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0005:0001">깊이 맵을 사진과 함께 사용하면 iOS 카메라 앱의 Portrait 모드처럼 전경과 배경 요소를 다르게 처리하는 이미지 처리 효과를 만들 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0005:0002">색상 데이터와 깊이 데이터를 분리해 저장하면 촬영이 완료된 후에도 이러한 효과를 적용하고 변경할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0001">!<a href="https://docs-assets.developer.apple.com/published/d06edb877980433bf589ec401cb91f66/media-2978410%402x.png">iOS가 색상 카메라 이미지와 깊이 맵을 사용해 Portrait 사진 효과를 생성하는 방법을 보여주는 그림</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0007:0001"><a href="capturing-still-and-live-photos.md">@@TOKEN_0@@</a>에서 다루는 여러 촬영 워크플로우에 다음 단계를 추가하여 깊이 캡처를 통합할 수 있습니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:prepare-for-depth-photo-capture:0008:0001">깊이 사진 캡처 준비</span>

<span class="ko-segment" data-segment-id="seg:paragraph:prepare-for-depth-photo-capture:0009:0001">깊이 맵을 캡처하려면 먼저 <a href="avcapturedevice/devicetype-swift.struct/builtindualcamera.md">@@TOKEN_0@@</a> 또는 <a href="avcapturedevice/devicetype-swift.struct/builtintruedepthcamera.md">@@TOKEN_1@@</a> 캡처 장치를 세션의 비디오 입력으로 선택해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:prepare-for-depth-photo-capture:0009:0002">iOS 기기에 듀얼 카메라 또는 TrueDepth 카메라가 있어도 기본 후면/전면 카메라를 선택하면 깊이 캡처가 활성화되지 않습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:prepare-for-depth-photo-capture:0010:0001">깊이 캡처에는 캡처 파이프라인의 내부 재구성이 추가로 필요하며, 이로 인해 캡처가 잠시 지연되고 진행 중인 캡처가 중단됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:prepare-for-depth-photo-capture:0010:0002">첫 번째 깊이 사진을 촬영하기 전에 <a href="avcapturephotooutput.md">@@TOKEN_0@@</a> 객체에서 깊이 캡처를 활성화하여 파이프라인을 적절히 구성해야 합니다.</span>

```swift
// Select a depth-capable capture device.
guard let videoDevice = AVCaptureDevice.default(.builtInDualCamera,
    for: .video, position: .back)
    else { fatalError("No dual camera.") }
guard let videoDeviceInput = try? AVCaptureDeviceInput(device: videoDevice),
    self.captureSession.canAddInput(videoDeviceInput)
    else { fatalError("Can't add video input.") }
self.captureSession.beginConfiguration()
self.captureSession.addInput(videoDeviceInput)

// Set up photo output for depth data capture.
let photoOutput = AVCapturePhotoOutput()
guard self.captureSession.canAddOutput(photoOutput)
    else { fatalError("Can't add photo output.") }
self.captureSession.addOutput(photoOutput)
self.captureSession.sessionPreset = .photo
// Enable delivery of depth data after adding the output to the capture session.
photoOutput.isDepthDataDeliveryEnabled = photoOutput.isDepthDataDeliverySupported
self.captureSession.commitConfiguration()
```

> <span class="ko-segment" data-segment-id="seg:blockquote:prepare-for-depth-photo-capture:0012:0001">**참고**: 듀얼 카메라에서 깊이 캡처를 활성화하면 광각 카메라와 망원 카메라의 줌 계수가 모두 고정됩니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:choose-settings:0013:0001">설정 선택</span>

<span class="ko-segment" data-segment-id="seg:paragraph:choose-settings:0014:0001">사진 출력이 깊이 캡처 준비가 되면 개별 사진마다 색상 이미지와 함께 깊이 맵 캡처를 요청할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:choose-settings:0014:0002">색상 이미지의 형식을 선택하여 <a href="avcapturephotosettings.md">@@TOKEN_0@@</a> 객체를 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:choose-settings:0014:0003">그다음 해당 사진에 대해 필요한 다른 설정과 함께 깊이 캡처 및 깊이 출력을 활성화한 뒤 <a href="avcapturephotooutput/capturephoto(with:delegate:">@@TOKEN_0@@</a>.md) 메서드를 호출합니다.</span>

```swift
let photoSettings = AVCapturePhotoSettings(format: [AVVideoCodecKey: AVVideoCodecType.hevc])
photoSettings.isDepthDataDeliveryEnabled = photoOutput.isDepthDataDeliverySupported

// Shoot the photo, using a custom class to handle capture delegate callbacks.
let captureProcessor = PhotoCaptureProcessor()
photoOutput.capturePhoto(with: photoSettings, delegate: captureProcessor)
```

##### <span class="ko-segment" data-segment-id="seg:heading:handle-results:0016:0001">결과 처리</span>

<span class="ko-segment" data-segment-id="seg:paragraph:handle-results:0017:0001">캡처 후 사진 출력은 delegate의 <a href="avcapturephotocapturedelegate/photooutput(_:didfinishprocessingphoto:error:">@@TOKEN_0@@</a>.md) 메서드를 호출해 사진과 캡처된 깊이 데이터를 <a href="avcapturephoto.md">@@TOKEN_1@@</a> 객체로 제공합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:handle-results:0018:0001">캡처된 깊이 데이터를 즉시 사용할 계획이라면(예: 깊이 기반 이미지 처리 효과의 미리보기를 표시하려는 경우), 사진 객체의 <a href="avcapturephoto/depthdata.md">@@TOKEN_0@@</a> 속성에서 확인할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:handle-results:0019:0001">그렇지 않으면 캡처 출력은 사진 저장을 위한 파일 데이터를 만들 때 <a href="avcapturephoto/filedatarepresentation(">@@TOKEN_0@@</a>.md) 메서드로 깊이 데이터와 깊이 관련 메타데이터를 포함합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:handle-results:0019:0002">결과 파일을 사진 라이브러리에 추가하면 시스템 Photos 앱을 포함한 다른 앱이 깊이 데이터를 자동으로 인식해 깊이 기반 이미지 처리 효과를 적용할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:handle-results:0019:0003">(이 옵션을 비활성화해야 하는 경우 <a href="avcapturephotosettings/embedsdepthdatainphoto.md">@@TOKEN_0@@</a> 설정을 확인합니다.)</span>

##### <span class="ko-segment" data-segment-id="seg:heading:about-disparity-depth-and-accuracy:0020:0001">시차 깊이 및 정확도</span>

<span class="ko-segment" data-segment-id="seg:paragraph:about-disparity-depth-and-accuracy:0021:0001">호환되는 기기에서 후면 듀얼 카메라로 깊이 캡처를 활성화하면(참조: <a href="https://developer.apple.comhttps://developer.apple.com/library/archive/documentation/DeviceInformation/Reference/iOSDeviceCompatibility/Introduction/Introduction.html#//apple_ref/doc/uid/TP40013599">@@TOKEN_0@@</a>), 시스템은 두 카메라를 모두 사용해 이미지를 캡처합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:about-disparity-depth-and-accuracy:0021:0002">기기 후면의 두 평행 카메라는 간격이 매우 짧기 때문에 두 이미지에 모두 나타나는 유사한 특징에서 시차 이동이 발생합니다. 카메라에 가까운 객체일수록 두 이미지 간 이동 거리가 더 큽니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:about-disparity-depth-and-accuracy:0021:0003">캡처 시스템은 아래에 표시된 바와 같이 이 차이, 즉 *disparity*를 사용해 이미지의 객체와 카메라 사이의 상대 거리를 추론합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:about-disparity-depth-and-accuracy:0022:0001">!<a href="https://docs-assets.developer.apple.com/published/94f213d5be82fedf7626347d3b221af4/media-2978411%402x.png">두 장의 사진에서 시차 차이가 깊이 맵을 만드는 방식</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:about-disparity-depth-and-accuracy:0023:0001">듀얼 카메라 장치로 캡처한 깊이 맵의 각 지점은 1/미터 단위의 disparity 값을 측정하며, <a href="avdepthdata/accuracy/relative.md">@@TOKEN_0@@</a> 정확도를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:about-disparity-depth-and-accuracy:0023:0002">개별 포인트는 실제 거리의 정확한 추정치가 아니지만, 포인트 간의 변화는 깊이 기반 이미지 처리 효과에 사용할 만큼 충분히 일관적입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:about-disparity-depth-and-accuracy:0024:0001">TrueDepth 카메라는 카메라 앞에 적외선 패턴을 투사하고 적외선 카메라로 그 패턴을 촬영합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:about-disparity-depth-and-accuracy:0024:0002">장면의 객체가 패턴을 왜곡하는 방식을 관찰함으로써 캡처 시스템은 이미지 내 각 지점까지의 카메라 거리를 계산할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:about-disparity-depth-and-accuracy:0025:0001">TrueDepth 카메라는 기본적으로 disparity 맵을 생성하여, 결과 깊이 데이터가 듀얼 카메라 장치에서 생성된 데이터와 유사해지도록 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:about-disparity-depth-and-accuracy:0025:0002">그러나 듀얼 카메라 장치와 달리 TrueDepth 카메라는 <a href="avdepthdata/accuracy/absolute.md">@@TOKEN_0@@</a> 정확도로 미터 단위의 깊이를 직접 측정할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:about-disparity-depth-and-accuracy:0025:0003">disparity가 아닌 depth를 캡처하려면 캡처 세션을 시작하기 전에 capture 장치의 <a href="avcapturedevice/activedepthdataformat.md">@@TOKEN_0@@</a>을 설정합니다.</span>

```swift
// Select a depth (not disparity) format that works with the active color format.
let availableFormats = captureDevice.activeFormat.supportedDepthDataFormats

let depthFormat = availableFormats.filter { format in
    let pixelFormatType =
        CMFormatDescriptionGetMediaSubType(format.formatDescription)
    
    return (pixelFormatType == kCVPixelFormatType_DepthFloat16 ||
            pixelFormatType == kCVPixelFormatType_DepthFloat32)
}.first

// Set the capture device to use that depth format.
captureSession.beginConfiguration()
captureDevice.activeDepthDataFormat = depthFormat
captureSession.commitConfiguration()
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0027:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="creating-auxiliary-depth-data-manually.md">Creating auxiliary depth data manually</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">자체 이미지에 깊이 이미지를 생성해 첨부합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="capturing-depth-using-the-lidar-camera.md">Capturing depth using the LiDAR camera</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">지원 기기에서 LiDAR 카메라에 접근해 정밀한 깊이 데이터를 캡처합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avcamfilter-applying-filters-to-a-capture-stream.md">AVCamFilter: Applying filters to a capture stream</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">전면 TrueDepth 카메라에서 스트리밍되는 캡처 스트림에 로즈 톤 필터링과 깊이 효과를 적용해 렌더링합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="streaming-depth-data-from-the-truedepth-camera.md">Streaming depth data from the TrueDepth camera</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">TrueDepth 카메라에서 2D 및 3D로 깊이 데이터를 시각화합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="enhancing-live-video-by-leveraging-truedepth-camera-data.md">Enhancing live video by leveraging TrueDepth camera data</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">전면 TrueDepth 카메라에서 스트리밍되는 라이브 캡처 피드에 사용자 배경을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="avcapturedepthdataoutput.md">class AVCaptureDepthDataOutput</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">호환되는 카메라 장치에서 장면 깊이 정보를 기록하는 캡처 출력입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="avdepthdata.md">class AVDepthData</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">호환되는 카메라 장치가 캡처한 픽셀 단위 거리 또는 시차 정보의 컨테이너입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="avcameracalibrationdata.md">class AVCameraCalibrationData</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">이미지와 깊이 데이터 캡처에 사용되는 카메라 특성에 대한 정보입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">*<a href="https://developer.apple.com/documentation/avfoundation/capturing-photos-with-depth">View on Apple Developer</a>*</span>
