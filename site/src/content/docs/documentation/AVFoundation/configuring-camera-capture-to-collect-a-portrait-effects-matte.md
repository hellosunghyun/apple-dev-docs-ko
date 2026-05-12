---
source_path: "documentation/AVFoundation/configuring-camera-capture-to-collect-a-portrait-effects-matte.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/configuring-camera-capture-to-collect-a-portrait-effects-matte"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:configuring-camera-capture-to-collect-a-portrait-effects-matte:0000:0001">Portrait Effects matte를 수집하도록 카메라 캡처 구성하기</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-camera-capture-to-collect-a-portrait-effects-matte:0001:0001">**프레임워크**: AVFoundation</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-camera-capture-to-collect-a-portrait-effects-matte:0002:0001">사진 촬영 시 Portrait Effects matte를 캡처할 수 있도록 앱을 준비합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0003:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0001">iOS Camera 앱에서 사진을 촬영할 때 Portrait 모드로 전환하고 얼굴을 감지하면 portrait effects matte가 생성됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0002">뷰파인더에서 노란색 괄호 4개를 확인하면 카메라가 얼굴을 찾았는지 판단할 수 있습니다. Portrait 모드에서 감지된 얼굴을 촬영한다고 해서 matte가 항상 생성되는 것은 아니지만, 이 조건이 선행되어야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0005:0001">iOS Camera 앱과 마찬가지로 앱에서도 Portrait effects matte를 생성하여 캡처한 사진에 포함하도록 선택할 수 있으며, 최종적으로 HEIC 및 JPEG 이미지로 저장됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0005:0002">AVFoundation의 <a href="avcapturephotooutput.md">@@TOKEN_0@@</a>를 사용하면 특정 카메라 구성이 정지 이미지에 portrait effects matte 전달을 지원하는지 확인하고, 사진 요청별로 전달되도록 선택할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0005:0003"><a href="avcapturephotooutput.md">@@TOKEN_0@@</a>는 <a href="avcapturephoto.md">@@TOKEN_1@@</a>라는 인메모리 래퍼 객체를 사용해 사진 결과를 전달합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0001">**Swift**:</span>

```swift
// private let photoOutput = AVCapturePhotoOutput()
...
// Check that portrait effects matte delivery is supported on this particular device:
if self.photoOutput.isPortraitEffectsMatteDeliverySupported {
    self.photoOutput.isPortraitEffectsMatteDeliveryEnabled = true
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">**Objective-C**:</span>

```objc
// AVCapturePhotoOutput* photoOutput;
...
// Check that portrait effects matte delivery is supported on this particular device:
if (self.photoOutput.portraitEffectsMatteDeliverySupported) {
    self.photoOutput.portraitEffectsMatteDeliveryEnabled = YES;
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001">portrait effects matte 전달을 선택한 경우, <a href="avcapturephotocapturedelegate.md">@@TOKEN_0@@</a>로 전달되는 <a href="avcaptureresolvedphotosettings.md">@@TOKEN_1@@</a>를 검사하고, <a href="avcaptureresolvedphotosettings/portraiteffectsmattedimensions.md">@@TOKEN_2@@</a> 속성을 읽어 전달될 매팅 이미지 크기를 확인할 수 있습니다. 크기를 하드코딩해 가정할 필요가 없습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0001">앱이 매팅 전달을 선택했더라도 결과 <a href="avcapturephoto.md">@@TOKEN_0@@</a>에 매팅 이미지가 항상 포함된다는 보장은 없습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0002">인물 분할 및 portrait effects matte를 생성하는 신경망은 사람을 감지하고 분할하도록 학습되었습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0003">이미지 장면에 사람이 없다면 해당 이미지에는 portrait effects matte의 이점이 없어 전달되지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0004">이 <a href="avcapturephoto.md">@@TOKEN_0@@</a> 객체에는 iOS 12에서 이미지의 <a href="avcapturephoto/portraiteffectsmatte.md">@@TOKEN_1@@</a>에 접근하기 위한 새 읽기 전용 접근자 속성이 추가되었습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0005">이 속성을 읽었을 때 반환값이 <code>nil</code>이면 해당 이미지에 대해 portrait effects matte가 필요하지 않아 생성되지 않았음을 의미합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0006">카메라는 matte 이미지를 후처리 단계로 생성하므로 사진 촬영 전에 matte가 생성될지 확인할 수 없습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0007">현재 가능한 최선은 <a href="avmetadatafaceobject.md">@@TOKEN_0@@</a>를 사용해 감지된 얼굴을 확인하고 깊이와 portrait effects matte를 활성화하는 것입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0012:0001">portrait effects matte 알고리즘은 사람 분할과 깊이를 정밀화 단계로 함께 사용하므로, matte 전달은 깊이를 지원하는 카메라와 카메라 형식에서만 지원됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0012:0002">portrait effects matte 이미지는 깊이 이미지가 없는 이미지 파일에 포함해서는 안 되며, 두 항목은 함께 전달되어야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0012:0003">이 규칙은 <a href="avcapturephotooutput.md">@@TOKEN_0@@</a> 단계에서 적용됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0012:0004">portrait effects matte 전달을 선택하고 이를 <a href="avcapturephotooutput.md">@@TOKEN_0@@</a> 컨테이너에 임베드하도록 요청하면, 임베드 깊이 데이터 전달도 함께 선택해야 합니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:write-a-captured-portrait-effects-matte-to-disk:0013:0001">캡처한 Portrait Effects Matte를 디스크에 쓰기</span>

<span class="ko-segment" data-segment-id="seg:paragraph:write-a-captured-portrait-effects-matte-to-disk:0014:0001"><a href="avcapturephoto.md">@@TOKEN_0@@</a>는 <a href="avcapturephoto/filedatarepresentation(">@@TOKEN_1@@</a>.md)을 사용해 기본 인메모리 파일 컨테이너에 대한 클라이언트 접근을 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:write-a-captured-portrait-effects-matte-to-disk:0014:0002">결과 <a href="https://developer.apple.com/documentation/Foundation/NSData">@@TOKEN_0@@</a>는 HEIC 또는 JPEG 파일로 디스크에 쓰기에 적합합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:write-a-captured-portrait-effects-matte-to-disk:0014:0003">이미지 파일에서 portrait effects matte를 대체하거나 제거하려면 <a href="avcapturephoto/filedatarepresentation(with:">@@TOKEN_0@@</a>.md)를 호출합니다. 이 메서드는 이미지를 디스크 기록용 컨테이너로 패키징하기 전에 커스터마이저 객체를 통해 이미지의 여러 요소를 수정, 교체 또는 제거합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:write-a-captured-portrait-effects-matte-to-disk:0015:0001">JPEG와 HEIC 파일 모두에 임베드된 portrait effects matte 데이터를 저장할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:write-a-captured-portrait-effects-matte-to-disk:0015:0002">JFIF/JPEG로 저장할 때 matte는 JPEG 방식으로 압축됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:write-a-captured-portrait-effects-matte-to-disk:0015:0003">HEIC 파일로 저장할 때는 HEVC 코덱으로 압축됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:write-a-captured-portrait-effects-matte-to-disk:0015:0004">매팅 이미지에는 넓은 평탄한 검정 또는 흰색 영역이 포함되는 경향이 있어 iOS 11 사진보다 파일 크기가 더 작습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0016:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001">[convenience init(fromDictionaryRepresentation: [AnyHashable : Any]) throws](avportraiteffectsmatte/init(fromdictionaryrepresentation:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">이미지 파일의 보조 이미지 정보를 사용해 portrait effects matte 인스턴스를 초기화합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avportraiteffectsmatte/applyingexiforientation(_:">func applyingExifOrientation(CGImagePropertyOrientation) -&gt; Self</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">지정한 EXIF 방향을 적용한 파생 portrait effects matte를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avportraiteffectsmatte/replacingportraiteffectsmatte(with:">func replacingPortraitEffectsMatte(with: CVPixelBuffer) throws -&gt; Self</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">교체된 픽셀 버퍼를 래핑하여 portrait effects matte를 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">*<a href="https://developer.apple.com/documentation/avfoundation/configuring-camera-capture-to-collect-a-portrait-effects-matte">View on Apple Developer</a>*</span>
