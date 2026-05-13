---
source_path: "documentation/AVFoundation/capturing-cinematic-video.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/capturing-cinematic-video"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:capturing-cinematic-video:0000:0001">시네마틱 비디오 캡처</span>

<span class="ko-segment" data-segment-id="seg:paragraph:capturing-cinematic-video:0001:0001">**프레임워크**: AVFoundation</span>

<span class="ko-segment" data-segment-id="seg:paragraph:capturing-cinematic-video:0002:0001">심도와 초점 포인트를 조정할 수 있는 비디오를 캡처합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:capturing-cinematic-video:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:capturing-cinematic-video:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:capturing-cinematic-video:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:capturing-cinematic-video:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:capturing-cinematic-video:0004:0004">Xcode 26.0+</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0005:0001">Overview</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0006:0001">**Note**: 이 샘플 코드 프로젝트는 WWDC25 세션 319: <a href="https://developer.apple.comhttps://developer.apple.com/videos/play/wwdc2025/319">@@TOKEN_0@@</a>와 연관됩니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:configure-the-sample-code-project:0007:0001">샘플 코드 프로젝트 구성</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configure-the-sample-code-project:0008:0001">시뮬레이터는 장치 카메라에 액세스할 수 없으므로, 이 샘플 앱은 iOS 26 이상이 설치된 iOS 기기에서 실행해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="setting-up-a-capture-session.md">Setting up a capture session</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">사진 또는 비디오를 캡처하기 전에 입력 장치, 출력 미디어, 미리보기 뷰, 기본 설정을 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="../AVKit/accessing-the-camera-while-multitasking-on-ipad.md">Accessing the camera while multitasking on iPad</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Split View, Slide Over, Picture in Picture, Stage Manager 모드에서 카메라를 조작합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcam-building-a-camera-app.md">AVCam: Building a camera app</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">전면 및 후면 iPhone, iPad 카메라를 사용해 사진을 캡처하고 비디오를 녹화합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmulticampip-capturing-from-multiple-cameras.md">AVMultiCamPiP: Capturing from Multiple Cameras</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">멀티 카메라 캡처 세션을 사용해 전면 카메라와 후면 카메라의 출력을 하나의 동영상 파일로 동시에 녹화합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcambarcode-detecting-barcodes-and-faces.md">AVCamBarcode: detecting barcodes and faces</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">카메라를 사용해 기계 판독 가능한 코드나 얼굴을 식별합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcapturesession.md">class AVCaptureSession</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">입력 장치에서 캡처 출력으로 데이터 흐름을 구성하고 조정하는 캡처 동작을 구성하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avcapturemulticamsession.md">class AVCaptureMultiCamSession</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">동일한 미디어 유형의 여러 입력에서 동시 캡처를 지원하는 캡처 세션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avcaptureinput.md">class AVCaptureInput</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">캡처 세션에 입력 데이터를 제공하는 추상 슈퍼클래스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avcaptureoutput.md">class AVCaptureOutput</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">캡처 세션의 미디어 출력 대상을 제공하는 추상 슈퍼클래스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avcaptureconnection.md">class AVCaptureConnection</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">캡처 입력에서 캡처 출력으로 가는 연결을 나타내는 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/avfoundation/capturing-cinematic-video">View on Apple Developer</a>*</span>
