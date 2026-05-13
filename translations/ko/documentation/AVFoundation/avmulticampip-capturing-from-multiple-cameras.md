---
source_path: "documentation/AVFoundation/avmulticampip-capturing-from-multiple-cameras.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmulticampip-capturing-from-multiple-cameras"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avmulticampip-capturing-from-multiple-cameras:0000:0001">AVMultiCamPiP: Capturing from Multiple Cameras</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmulticampip-capturing-from-multiple-cameras:0001:0001">**Framework**: AVFoundation</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmulticampip-capturing-from-multiple-cameras:0002:0001">Simultaneously record the output from the front and back cameras into a single movie file by using a multi-camera capture session.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmulticampip-capturing-from-multiple-cameras:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avmulticampip-capturing-from-multiple-cameras:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmulticampip-capturing-from-multiple-cameras:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmulticampip-capturing-from-multiple-cameras:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmulticampip-capturing-from-multiple-cameras:0004:0004">Xcode 16.0+</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0005:0001">Overview</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0006:0001">**Note**: This sample code project is associated with WWDC 2019 session <a href="https://developer.apple.comhttps://developer.apple.com/videos/play/wwdc19/225/">@@TOKEN_0@@</a>.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:configure-the-sample-code-project:0007:0001">Configure the Sample Code Project</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configure-the-sample-code-project:0008:0001">You must run this sample code on one of these devices:</span>

- <span class="ko-segment" data-segment-id="seg:list:configure-the-sample-code-project:0009:0001">An iPhone with an A12 or later processor</span>
- <span class="ko-segment" data-segment-id="seg:list:configure-the-sample-code-project:0009:0002">An iPad Pro with an A12X or later processor</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="setting-up-a-capture-session.md">Setting up a capture session</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">Configure input devices, output media, preview views, and basic settings before capturing photos or video.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="../AVKit/accessing-the-camera-while-multitasking-on-ipad.md">Accessing the camera while multitasking on iPad</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">Operate the camera in Split View, Slide Over, Picture in Picture, and Stage Manager modes.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcam-building-a-camera-app.md">AVCam: Building a camera app</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">Capture photos and record video using the front and rear iPhone and iPad cameras.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="capturing-cinematic-video.md">Capturing Cinematic video</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">비실시간으로 오디오를 처리하는 개체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avcambarcode-detecting-barcodes-and-faces.md">AVCamBarcode: detecting barcodes and faces</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">재생 속도와 피치 시프트를 서로 독립적으로 고품질로 제공하는 개체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avcapturesession.md">class AVCaptureSession</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">An object that configures capture behavior and coordinates the flow of data from input devices to capture outputs.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avcapturemulticamsession.md">class AVCaptureMultiCamSession</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">A capture session that supports simultaneous capture from multiple inputs of the same media type.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avcaptureinput.md">class AVCaptureInput</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">An abstract superclass for objects that provide input data to a capture session.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avcaptureoutput.md">class AVCaptureOutput</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">An abstract superclass for objects that provide media output destinations for a capture session.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="avcaptureconnection.md">class AVCaptureConnection</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">An object that represents a connection from a capture input to a capture output.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmulticampip-capturing-from-multiple-cameras">View on Apple Developer</a>*</span>
