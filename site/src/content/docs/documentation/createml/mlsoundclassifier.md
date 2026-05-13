---
source_path: "documentation/createml/mlsoundclassifier.md"
upstream_sha: "85608b77f806b9f7a381c16d34b1eee64b26ed0b"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/createml/mlsoundclassifier"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# MLSoundClassifier

**Framework**: Create ML  
**Kind**: struct

오디오 파일로 훈련해 기기에서 소리를 인식하고 식별하는 machine learning model입니다.

**Availability**:
- iOS 15.0+
- iPadOS 15.0+
- Mac Catalyst 15.0+
- macOS 10.15+
- visionOS 1.0+

## Declaration

```swift
struct MLSoundClassifier
```

#### Overview

사운드 분류기는 앱 안에서 소리를 식별하고 범주화하는 machine learning model입니다. 오디오 파일 dataset을 모아 `MLSoundClassifier`로 model을 훈련해 만들 수 있습니다.

앱이 식별해야 하는 소리를 가장 잘 대표하는 오디오 파일을 녹음하거나 수집해 dataset을 구성합니다. 이때 분류기가 들을 수는 있지만 관심 대상이 아닌 관련 잡음 묶음인 *negative class*도 함께 준비합니다.

예를 들어 웃음소리와 박수소리를 식별하는 사운드 분류기를 만든다고 가정합니다. 사람들이 웃거나 박수치는 예시 오디오뿐 아니라 배경 소음을 위한 추가 category를 넣을 수 있습니다. 극장이나 야외 공연장처럼 다양한 환경의 녹음을 추가하면, 분류기는 관심 소리와 주변 소음을 더 잘 구분합니다. 즉 박수가 없을 때 “Applause”라고 예측하는 일을 줄일 수 있습니다. 다른 classifier와 마찬가지로, 예측을 요청하면 사운드 분류기는 훈련 dataset에서 학습한 category 중 하나를 반환합니다.

분류기가 학습해야 하는 각 소리 category마다 최소 10개의 오디오 예시를 준비하고, 배경 소음을 위한 negative class를 최소 하나 이상 추가합니다. 오디오 예시는 Core Audio가 지원하는 어떤 파일 형식도 사용할 수 있습니다.

- M4A
- MP3
- AIFF
- WAV

> Tip: 가장 좋은 결과를 얻으려면 16 kHz 이상의 sample rate를 가진 single-channel 오디오 파일을 사용하세요.

사운드 분류기의 성능에 나쁜 영향을 줄 수 있는 bias를 줄이려면, 일관된 bit depth와 sample rate를 사용하는 오디오 파일을 모으세요.

Create ML의 다른 model type을 만들 때와 비슷한 흐름으로 사운드 분류기를 훈련, 평가, export합니다. Create ML 훈련 workflow에 대한 자세한 내용은 다음 문서를 참고하세요.

- [Creating an Image Classifier Model](creating-an-image-classifier-model.md)
- [Creating an Action Classifier Model](creating-an-action-classifier-model.md)

사운드 분류기의 Core ML model을 Xcode project에 추가하고 runtime에서 `SNClassifySoundRequest`를 만들어 사용할 수 있습니다. 앱은 Sound Analysis의 file 또는 stream 분류 절차를 따라 오디오 파일이나 오디오 stream의 소리를 식별합니다.

- [Classifying Sounds in an Audio File](https://developer.apple.com/documentation/SoundAnalysis/classifying-sounds-in-an-audio-file)
- [Classifying Sounds in an Audio Stream](https://developer.apple.com/documentation/SoundAnalysis/classifying-sounds-in-an-audio-stream)

## Topics

### 사운드 분류기를 비동기로 훈련하기

- [static train(trainingData:parameters:sessionParameters:)](mlsoundclassifier/train(trainingdata:parameters:sessionparameters:).md)  
  data source로 표현된 훈련 dataset을 사용해 비동기 사운드 분류기 훈련 session을 시작합니다.
- [static func makeTrainingSession(trainingData: MLSoundClassifier.DataSource, parameters: MLSoundClassifier.ModelParameters, sessionParameters: MLTrainingSessionParameters) throws -> MLTrainingSession<MLSoundClassifier>](mlsoundclassifier/maketrainingsession(trainingdata:parameters:sessionparameters:).md)  
  사운드 분류기를 위한 비동기 훈련 session을 만듭니다.
- [static func resume(MLTrainingSession<MLSoundClassifier>) throws -> MLJob<MLSoundClassifier>](mlsoundclassifier/resume(_:).md)  
  사운드 분류기의 비동기 훈련 session을 시작하거나 이어서 진행합니다.
- [static func restoreTrainingSession(sessionParameters: MLTrainingSessionParameters) throws -> MLTrainingSession<MLSoundClassifier>](mlsoundclassifier/restoretrainingsession(sessionparameters:).md)  
  기존 훈련 session 상태를 parameters에서 복원해 비동기 훈련 session을 만듭니다.
- [static func extractFeatures(trainingData: MLSoundClassifier.DataSource, parameters: MLSoundClassifier.FeatureExtractionParameters, sessionParameters: MLTrainingSessionParameters) throws -> MLJob<MLSoundClassifier.DataSource>](mlsoundclassifier/extractfeatures(trainingdata:parameters:sessionparameters:).md)  
  사운드 파일 data source에서 sound feature를 추출하는 비동기 session을 시작합니다.
- [MLSoundClassifier.FeatureExtractionParameters](mlsoundclassifier/featureextractionparameters.md)  
  오디오 파일에서 sound feature를 추출하는 과정에 영향을 주는 parameters입니다.

### checkpoint에서 사운드 분류기 만들기

- [init(checkpoint: MLCheckpoint) throws](mlsoundclassifier/init(checkpoint:).md)  
  훈련 session checkpoint에서 사운드 분류기를 만듭니다.

### 사운드 분류기를 동기로 훈련하기

- [init(trainingData:parameters:)](mlsoundclassifier/init(trainingdata:parameters:).md)  
  data source로 표현된 훈련 dataset을 사용해 사운드 분류기를 만듭니다.

### 사운드 분류기 평가하기

- [func evaluation(on:)](mlsoundclassifier/evaluation(on:).md)  
  data source로 표현된 dataset에서 사운드 분류기의 성능을 평가해 metrics를 생성합니다.
- [var trainingMetrics: MLClassifierMetrics](mlsoundclassifier/trainingmetrics.md)  
  training dataset에서 classifier 성능을 측정한 값입니다.
- [var validationMetrics: MLClassifierMetrics](mlsoundclassifier/validationmetrics.md)  
  validation dataset에서 classifier 성능을 측정한 값입니다.

### 사운드 분류기 테스트하기

- [func predictions(from: [URL]) throws -> [String]](mlsoundclassifier/predictions(from:).md)  
  오디오 파일 배열에 대한 예측을 생성합니다.
- [func predictions(from: [URL], overlapFactor: Double, predictionTimeWindowSize: TimeInterval) throws -> [String]](mlsoundclassifier/predictions(from:overlapfactor:predictiontimewindowsize:).md)  
  오디오 파일 배열에 대해 overlap factor와 time window size를 사용하는 예측을 생성합니다.

### 사운드 분류기 저장하기

- [func write(to: URL, metadata: MLModelMetadata?) throws](mlsoundclassifier/write(to:metadata:).md)  
  사운드 분류기를 model file로 file system 위치에 export합니다.
- [func write(toFile: String, metadata: MLModelMetadata?) throws](mlsoundclassifier/write(tofile:metadata:).md)  
  사운드 분류기를 model file로 file system path에 export합니다.

### 사운드 분류기 model 살펴보기

- [var model: MLModel](mlsoundclassifier/model.md)  
  메모리에 저장된 사운드 분류기의 underlying model instance입니다.
- [let modelParameters: MLSoundClassifier.ModelParameters](mlsoundclassifier/modelparameters-swift.property.md)  
  사운드 분류기가 훈련 session 중 사용한 model configuration parameters입니다.

### 사운드 분류기 설명하기

- [var description: String](mlsoundclassifier/description.md)  
  사운드 분류기의 textual representation입니다.
- [var debugDescription: String](mlsoundclassifier/debugdescription.md)  
  debugging 출력에 적합한 사운드 분류기의 textual representation입니다.
- [var playgroundDescription: Any](mlsoundclassifier/playgrounddescription.md)  
  playground에서 사용할 사운드 분류기의 설명입니다.

### Supporting types

- [MLSoundClassifier.DataSource](mlsoundclassifier/datasource.md)  
  file system 또는 data table에 있는 sound-classifier dataset의 표현입니다.
- [MLSoundClassifier.ModelParameters](mlsoundclassifier/modelparameters-swift.struct.md)  
  sound-classifier model 훈련 과정에 영향을 주는 parameters입니다.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mlsoundclassifier/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](mlsoundclassifier/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](mlsoundclassifier/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](../Swift/Copyable.md)
- [CustomDebugStringConvertible](../Swift/CustomDebugStringConvertible.md)
- [CustomPlaygroundDisplayConvertible](../Swift/CustomPlaygroundDisplayConvertible.md)
- [CustomStringConvertible](../Swift/CustomStringConvertible.md)
- [Escapable](../Swift/Escapable.md)
- [Sendable](../Swift/Sendable.md)
- [SendableMetatype](../Swift/SendableMetatype.md)

---

*[Apple Developer에서 보기](https://developer.apple.com/documentation/createml/mlsoundclassifier)*
