---
source_path: "documentation/AVFoundation/capturing-and-saving-live-photos.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/capturing-and-saving-live-photos"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:capturing-and-saving-live-photos:0000:0001">Live Photo 캡처 및 저장</span>

<span class="ko-segment" data-segment-id="seg:paragraph:capturing-and-saving-live-photos:0001:0001">**프레임워크**: AVFoundation</span>

<span class="ko-segment" data-segment-id="seg:paragraph:capturing-and-saving-live-photos:0002:0001">시스템 Camera 앱에서 생성되는 것과 같은 Live Photo를 캡처해 Photos 라이브러리에 저장합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0003:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0001">Live Photo는 촬영 직전과 직후의 순간에서 모션과 소리를 포함하는 사진입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0002">앱은 AVFoundation 캡처 시스템과 <a href="avcapturephotooutput.md">@@TOKEN_0@@</a> 클래스를 사용해 Live Photo를 캡처하고 기록할 수 있습니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0005:0001">**참고**: capture session, 입력 구성, photo capture에 익숙하지 않다면 <a href="setting-up-a-capture-session.md">@@TOKEN_0@@</a> 및 <a href="capturing-still-and-live-photos.md">@@TOKEN_1@@</a>를 참조해야 합니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:enable-live-photo-capture:0006:0001">Live Photo 캡처 활성화</span>

<span class="ko-segment" data-segment-id="seg:paragraph:enable-live-photo-capture:0007:0001">정지 사진의 경우 캡처 세션에는 비디오 입력만 있으면 되지만, Live Photo에는 소리가 포함되므로 세션에 오디오 캡처 장치도 연결해야 합니다.</span>

```swift
enum CameraError: Error {
    case configurationFailed
    // ... additional error cases ...
}

func configureSession() throws {
    captureSession.beginConfiguration()
    
    // ... add camera input and photo output ...
    
    guard let audioDevice = AVCaptureDevice.default(for: .audio),
          let audioDeviceInput = try? AVCaptureDeviceInput(device: audioDevice) else {
              throw CameraError.configurationFailed
    }
    
    if captureSession.canAddInput(audioDeviceInput) {
        captureSession.addInput(audioDeviceInput)
    } else {
        throw CameraError.configurationFailed
    }
    
    // ... configure photo output and start running ...
    
    captureSession.commitConfiguration()
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:enable-live-photo-capture:0009:0001">Because you’re already using a built-in camera device for video (see <a href="setting-up-a-capture-session.md">@@TOKEN_0@@</a>), you can simply use the default audio capture device—the system automatically uses the best microphone configuration for the camera position.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:enable-live-photo-capture:0010:0001">Live Photo 캡처에는 캡처 파이프라인을 내부적으로 재구성해야 하므로 시간이 걸리며 진행 중인 캡처가 중단됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:enable-live-photo-capture:0010:0002">첫 Live Photo를 촬영하기 전에 <a href="avcapturephotooutput.md">@@TOKEN_0@@</a> 객체에서 Live Photo 캡처를 활성화하여 파이프라인을 적절히 구성했는지 확인해야 합니다.</span>

```swift
let photoOutput = AVCapturePhotoOutput()

// Attempt to add the photo output to the session.
if captureSession.canAddOutput(photoOutput) {
    captureSession.sessionPreset = .photo
    captureSession.addOutput(photoOutput)
} else {
    throw CameraError.configurationFailed
}

// Configure the photo output's behavior.
photoOutput.isHighResolutionCaptureEnabled = true
photoOutput.isLivePhotoCaptureEnabled = photoOutput.isLivePhotoCaptureSupported

// Start the capture session.
captureSession.startRunning()
```

##### <span class="ko-segment" data-segment-id="seg:heading:capture-a-live-photo:0012:0001">Live Photo 촬영</span>

<span class="ko-segment" data-segment-id="seg:paragraph:capture-a-live-photo:0013:0001">사진 출력이 Live Photos에 대해 준비되면 각 샷마다 정지 이미지 캡처 또는 Live Photo 캡처를 선택할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:capture-a-live-photo:0013:0002">Live Photo을 캡처하려면 <a href="avcapturephotosettings.md">@@TOKEN_0@@</a> 객체를 만들고, Live Photo의 정지 이미지 부분에 사용할 형식을 선택한 다음 Live Photo의 동영상 부분을 기록할 URL을 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:capture-a-live-photo:0013:0003">그런 다음 캡처를 시작하려면 <a href="avcapturephotooutput/capturephoto(with:delegate:">@@TOKEN_0@@</a>.md) 를 호출합니다.</span>

```swift
let photoSettings = AVCapturePhotoSettings(format: [AVVideoCodecKey: AVVideoCodecType.hevc])
photoSettings.livePhotoMovieFileURL = // output url

// Shoot the Live Photo, using a custom class to handle capture delegate callbacks.
let captureProcessor = LivePhotoCaptureProcessor()
photoOutput.capturePhoto(with: photoSettings, delegate: captureProcessor)
```

##### <span class="ko-segment" data-segment-id="seg:heading:handle-live-photo-results:0015:0001">Live Photo 결과 처리</span>

<span class="ko-segment" data-segment-id="seg:paragraph:handle-live-photo-results:0016:0001">Live Photo은 Photos 앱에서 단일 에셋으로 보이지만 실제로는 별도의 파일로 구성됩니다. 즉, 기본 정지 이미지와 촬영 직전 및 직후의 동작과 소리를 포함하는 동영상 파일로 이루어집니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:handle-live-photo-results:0016:0002">캡처 시스템은 각 항목이 사용 가능해지는 즉시 결과를 각각 별도로 전달합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:handle-live-photo-results:0017:0001"><a href="avcapturephotocapturedelegate/photooutput(_:didfinishprocessingphoto:error:">@@TOKEN_0@@</a>.md) 메서드는 Live Photo의 정지 이미지 부분을 <a href="avcapturephoto.md">@@TOKEN_1@@</a> 객체로 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:handle-live-photo-results:0017:0002">정지 이미지와 동영상 파일을 함께 저장해야 하므로, 아래처럼 <a href="avcapturephoto.md">@@TOKEN_0@@</a>에서 이미지 파일 데이터를 추출해 동영상 파일 기록이 완료될 때까지 보관하는 것이 가장 좋습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:handle-live-photo-results:0017:0003">(이 메서드를 사용해 UI에서 정지 이미지가 캡처되었음을 나타낼 수도 있습니다.)</span>

```swift
func photoOutput(_ output: AVCapturePhotoOutput,
                 didFinishProcessingPhoto photo: AVCapturePhoto,
                 error: Error?) {
    guard error != nil else {
        print("Error capturing Live Photo still: \(error!)");
        return
    }
    
    // Get and process the captured image data.
    processImage(photo.fileDataRepresentation())
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:handle-live-photo-results:0019:0001"><a href="avcapturephotocapturedelegate/photooutput(_:didfinishprocessinglivephototomoviefileat:duration:photodisplaytime:resolvedsettings:error:">@@TOKEN_0@@</a>.md) 메서드는 나중에 호출되어, 캡처를 트리거할 때 지정한 URL에 완전한 동영상 파일이 이제 들어가 있음을 알립니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:handle-live-photo-results:0019:0002">정지 이미지와 동영상 부분을 모두 확보하면 함께 저장할 수 있습니다.</span>

```swift
func photoOutput(_ output: AVCapturePhotoOutput,
                 didFinishProcessingLivePhotoToMovieFileAt outputFileURL: URL,
                 duration: CMTime,
                 photoDisplayTime: CMTime,
                 resolvedSettings: AVCaptureResolvedPhotoSettings,
                 error: Error?) {
    
    guard error != nil else {
        print("Error capturing Live Photo movie: \(error!)");
        return
    }
    
    guard let stillImageData = stillImageData else { return }
    
    // Save Live Photo.
    saveLivePhotoToPhotosLibrary(stillImageData: stillImageData,
                                 livePhotoMovieURL: outputFileURL)
}
```

> <span class="ko-segment" data-segment-id="seg:blockquote:handle-live-photo-results:0021:0001">**Note**: 캡처 후 Live Photo을 표시하려면 <a href="https://developer.apple.com/documentation/Photos/PHLivePhoto">@@TOKEN_0@@</a>와 <a href="https://developer.apple.com/documentation/PhotosUI/PHLivePhotoView">@@TOKEN_1@@</a>를 참고하세요.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:save-a-live-photo-to-the-photos-library:0022:0001">Live Photo을 Photos 라이브러리에 저장</span>

<span class="ko-segment" data-segment-id="seg:paragraph:save-a-live-photo-to-the-photos-library:0023:0001">여러 파일의 미디어로 구성된 단일 Photos 에셋을 만들려면 <a href="https://developer.apple.com/documentation/Photos/PHAssetCreationRequest">@@TOKEN_0@@</a> 클래스를 사용합니다. Live Photo의 경우 정지 이미지와 짝이 되는 비디오를 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:save-a-live-photo-to-the-photos-library:0023:0002"><a href="saving-captured-photos.md">@@TOKEN_0@@</a>에서와 마찬가지로, 이 요청은 <a href="https://developer.apple.com/documentation/Photos/PHPhotoLibrary">@@TOKEN_1@@</a> 변경 블록에 래핑해야 하며, 먼저 앱이 사용자의 Photos 접근 권한을 보유했는지 확인해야 합니다.</span>

```swift
func saveLivePhotoToPhotosLibrary(stillImageData: Data, livePhotoMovieURL: URL) {    PHPhotoLibrary.requestAuthorization { status in
        guard status == .authorized else { return }
        
        PHPhotoLibrary.shared().performChanges({
            // Add the captured photo's file data as the main resource for the Photos asset.
            let creationRequest = PHAssetCreationRequest.forAsset()
            creationRequest.addResource(with: .photo, data: stillImageData, options: nil)
            
            // Add the movie file URL as the Live Photo's paired video resource.
            let options = PHAssetResourceCreationOptions()
            options.shouldMoveFile = true
            creationRequest.addResource(with: .pairedVideo, fileURL: livePhotoMovieURL, options: options)
        }) { success, error in
            // Handle completion.
        }
    }
}
```

> <span class="ko-segment" data-segment-id="seg:blockquote:save-a-live-photo-to-the-photos-library:0025:0001">💡 **Tip**: iOS가 앱 샌드박스에서 시스템 Photos 라이브러리로 동영상 파일을 비싼 데이터 복사 작업 없이 이동할 수 있도록 하려면 <a href="https://developer.apple.com/documentation/Photos/PHAssetResourceCreationOptions/shouldMoveFile">@@TOKEN_0@@</a> 옵션을 사용합니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:track-live-photo-progress:0026:0001">Live Photo 진행 상태 추적</span>

<span class="ko-segment" data-segment-id="seg:paragraph:track-live-photo-progress:0027:0001">Live Photo 캡처는 <a href="tracking-photo-capture-progress.md">@@TOKEN_0@@</a>에 표시된 프로세스에 두 단계를 추가합니다. 정지 사진 결과가 전달된 뒤(4단계), photo 출력에서 동영상 캡처 상태를 알리고(5단계), 동영상 결과를 전달합니다(6단계).</span> <span class="ko-segment" data-segment-id="seg:paragraph:track-live-photo-progress:0027:0002">(최종 정리는 7단계가 됩니다.)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:track-live-photo-progress:0028:0001">!<a href="https://docs-assets.developer.apple.com/published/128c17342e87a15ff120b1259fad4824/media-2961960%402x.png">capturePhoto() 호출 후 번호가 붙은 Live Photo 캡처 프로세스 단계 다이어그램.</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:track-live-photo-progress:0029:0001">시스템 Camera 앱에서 사용자가 Live Photo을 캡처하면, 몇 초 동안 “Live” 표시기가 나타나 비디오와 오디오가 여전히 녹화 중임을 알려줍니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:track-live-photo-progress:0029:0002">앱에서 유사한 인터페이스를 제공하려면 사진 캡처 델리게이트에 다음 메서드를 구현합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:track-live-photo-progress:0030:0001"><a href="avcapturephotocapturedelegate/photooutput(_:willbegincapturefor:">@@TOKEN_0@@</a>.md) 메서드는 캡처가 시작되었음을 알려줍니다. 이 메서드를 구현해 녹화 표시기를 표시합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:track-live-photo-progress:0030:0002"><a href="avcapturephotocapturedelegate/photooutput(_:didfinishrecordinglivephotomovieforeventualfileat:resolvedsettings:">@@TOKEN_0@@</a>.md) 메서드는 Live Photo 동영상이 더 이상 녹화되지 않음을 알려줍니다. 이 메서드를 구현해 표시기를 숨깁니다(이 시점에는 동영상 파일이 아직 사용할 수 없습니다.). 동시 실행되는 여러 Live Photo 캡처를 처리하려면, 이러한 메서드로 진행 중인 캡처 수를 추적하고 그 수가 0이 될 때만 표시기를 숨기는 방식이 가장 좋습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:track-live-photo-progress:0031:0001">동시에 여러 개의 Live Photo 캡처를 실행할 수 있으므로, 진행 중인 캡처 수를 추적하고 해당 수가 0이 될 때만 인디케이터를 숨기도록 이 메서드들을 사용하는 것이 좋습니다.</span>

```swift
class LivePhotoCaptureProcessor: NSObject, AVCapturePhotoCaptureDelegate {
    // ... other PhotoCaptureDelegate methods and supporting properties ...
    
    // A handler to call when Live Photo capture begins and ends.
    var livePhotoStatusHandler: (Bool) -> () = { _ in }
    
    // A property for tracking in-progress captures and updating UI accordingly.
    var livePhotosInProgress = 0 {
        didSet {
            // Update the UI accordingly based on the value of this property
        }
    }
    
    // Call the handler when PhotoCaptureDelegate methods indicate Live Photo capture is in progress.
    func photoOutput(_ output: AVCapturePhotoOutput,
                     willBeginCaptureFor resolvedSettings: AVCaptureResolvedPhotoSettings) {
        let capturingLivePhoto = (resolvedSettings.livePhotoMovieDimensions.width > 0 && resolvedSettings.livePhotoMovieDimensions.height > 0)
        livePhotoStatusHandler(capturingLivePhoto)
    }
    
    func photoOutput(_ output: AVCapturePhotoOutput,
                     didFinishRecordingLivePhotoMovieForEventualFileAt outputFileURL: URL,
                     resolvedSettings: AVCaptureResolvedPhotoSettings) {
        livePhotoStatusHandler(false)
    }
}
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0033:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="saving-captured-photos.md">Saving captured photos</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">사진 캡처에서 이미지와 기타 데이터를 사진 라이브러리에 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="tracking-photo-capture-progress.md">Tracking photo capture progress</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">캡처 중 주요 이벤트를 모니터링하여 카메라 UI에 피드백을 제공합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/avfoundation/capturing-and-saving-live-photos">View on Apple Developer</a>*</span>
